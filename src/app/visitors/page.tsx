"use client"
import NoteCard from '@/components/NoteCard'
import SketchPanel, { SketchPanelHandle } from '@/components/SketchPanel'
import { Button } from '@/components/ui/button'
import { ChevronDown, LayoutGrid, Loader2, Plus, SquareDashedMousePointer, Users } from 'lucide-react'
import React, { useEffect, useState, useRef, useMemo } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { dbFirestore } from '@/lib/firebase';
import { collection, addDoc, query, orderBy, serverTimestamp, getDocs, QueryDocumentSnapshot, DocumentData, startAfter, limit } from 'firebase/firestore';
import { usePresence, useLiveUserCount } from "@/lib/useLiveUserCount"
import leoProfanity from "leo-profanity";
import customSlangs from "@/lib/customSlangs.json"

leoProfanity.add(customSlangs);


interface VisitorNote {
    id?: string;
    imgUrl: string;
    name: string;
    desc: string;
    timestamp?: any;
    initialRotation?: number;
    initialX?: number;
    initialY?: number;
}

const Visitors = () => {
    usePresence()
    const liveUserCount = useLiveUserCount()
    const [isNotePosted, setIsNotePosted] = useState<string>("no");
    const sketchPanelRef = useRef<SketchPanelHandle>(null);
    const [isAddNoteDialogOpen, setIsAddNoteDialogOpen] = useState(false)
    const [isFormSubmitting, setIsFormSubmitting] = useState(false)
    const [notesView, setNotesView] = useState("grid");
    const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [notes, setNotes] = useState<VisitorNote[]>([
        {
            imgUrl: "/noteThumb300x300.png",
            name: "Tyson",
            desc: "Awesome portfolio!",
            initialRotation: 4,
            initialX: 200,
            initialY: 202,
        },
    ]);
    const [boardNotes, setBoardNotes] = useState<VisitorNote[]>([]);

    const [newNoteState, setNewNoteState] = useState<{
        name: string;
        desc: string;
        imgUrl: string | null;
    }>({
        name: "",
        desc: "",
        imgUrl: "",
    });

    const NOTES_PER_PAGE = 20;

    const fetchNotes = async (reset = false) => {
        if (loading && !reset) return;

        const newNotePostedVal = JSON.parse(localStorage.getItem("hasPosted") || `"no"`)
        setIsNotePosted(newNotePostedVal);

        setLoading(true);

        try {
            let currentLastDoc = lastDoc;
            if (reset) {
                setNotes([
                    {
                        imgUrl: "/noteThumb300x300.png",
                        name: "Tyson",
                        desc: "Awesome portfolio!",
                        initialRotation: 4,
                        initialX: 200,
                        initialY: 202,
                    },
                ]);
                currentLastDoc = null;
                setHasMore(true);
                setIsFirstLoad(true);
            }

            const notesQry = currentLastDoc
                ? query(
                    collection(dbFirestore, 'visitorNotes'),
                    orderBy('timestamp', 'desc'),
                    startAfter(currentLastDoc),
                    limit(NOTES_PER_PAGE)
                )
                : query(
                    collection(dbFirestore, 'visitorNotes'),
                    orderBy('timestamp', 'desc'),
                    limit(NOTES_PER_PAGE)
                );

            const snapshot = await getDocs(notesQry);

            if (isFirstLoad || reset) {
                setIsFirstLoad(false);
            }

            if (snapshot.empty) {
                setHasMore(false);
                setLoading(false);
                return;
            }

            const fetched: VisitorNote[] = snapshot.docs.map((doc) => {
                const data = doc.data() as VisitorNote;
                return {
                    id: doc.id,
                    ...data,
                    timestamp: data.timestamp ? data.timestamp.toDate() : null,
                }
            })

            if (reset) {
                setNotes(fetched);
            } else {
                setNotes((prev) => [...prev, ...fetched]);
            }
            setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

            if (snapshot.docs.length < NOTES_PER_PAGE) {
                setHasMore(false);
            }

        } catch (error: any) {
            console.error("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchNotes(true);
    }, []);

    const handleSaveNote = async () => {
        if (!sketchPanelRef.current) return;

        try {
            setIsFormSubmitting(true);
            const img = await sketchPanelRef.current.exportDrawing();

            const cleanedName = leoProfanity.clean(newNoteState.name);
            const cleanedDesc = leoProfanity.clean(newNoteState.desc);

            const newNote = {
                ...newNoteState,
                name: cleanedName,
                desc: cleanedDesc,
                imgUrl: img,
                timestamp: serverTimestamp(),
                initialRotation: getRandomRotation(),
                initialX: Math.floor(Math.random() * 300),
                initialY: Math.floor(Math.random() * 400),
            };

            await addDoc(collection(dbFirestore, 'visitorNotes'), newNote);

            setLastDoc(null);
            setHasMore(true);
            setIsFirstLoad(true);
            fetchNotes(true);

            setIsNotePosted("yes")
            localStorage.setItem("hasPosted", JSON.stringify("yes"))
            setIsAddNoteDialogOpen(false);
            setIsFormSubmitting(false);
            setNewNoteState({ name: "", desc: "", imgUrl: null });
        } catch (err) {
            setIsFormSubmitting(false);
            console.error("Something went wrong", err);
        }
    };

    // console.log(notes);

    const shuffleArray = (array: VisitorNote[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };


    const memoizedShuffledNotes = useMemo(() => {
        return shuffleArray(notes);
    }, [notes]);

    useEffect(() => {
        if (memoizedShuffledNotes.length > 0) {
            const selected = memoizedShuffledNotes.slice(0, Math.min(15, memoizedShuffledNotes.length));
            setBoardNotes(selected);
        }
    }, [memoizedShuffledNotes]);


    const handleViewToggle = () => {
        setNotesView((curView: string) => {
            if (curView == "board") {
                return "grid";
            }
            return "board";
        })
    }

    const getRandomRotation = (min = -4, max = 4) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };



    return (
        <div className='mx-auto bg-zinc-50/10'>
            <div className="main-container sm:px-6 lg:px-10 relative max-w-2xl pt-[100px] sm:pt-[130px] md:pt-[150px] lg:pt-[200px] mx-auto flex flex-col justify-center px-4 gap-8">
                <div className="wrapper border border-zinc-300 rounded-sm shadow-sm w-full relative">
                    <div className="notesNav p-2 w-full z-40 bg-zinc-200/50 border-b border-zinc-200 rounded-t-sm flex items-center justify-between backdrop-blur-lg absolute top-0">
                        <div className="leftNav flex gap-5 items-center z-[9990]">
                            <Button type='button' variant={"ghost"} onClick={handleViewToggle} className='border border-zinc-300 hover:bg-zinc-300 cursor-pointer hover:text-primary/80 rounded-sm text-primary p-2 w-[40px] h-[40px]'>{notesView == "board" ? <LayoutGrid /> : <SquareDashedMousePointer />}</Button>
                            <div className="activeUsers flex items-center gap-3">
                                <Users size={'18px'} className='text-paragraph' /> <span>{liveUserCount}</span>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-[ping_1.5s_infinite] rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                                </span>
                            </div>
                        </div>
                        <div className="navRight">
                            {(isNotePosted == "no" && !loading)
                                ?
                                <Button type='button' className='cursor-pointer py-5' onClick={() => setIsAddNoteDialogOpen(true)}><Plus /> Leave a note</Button>
                                :
                                <>
                                    <span className='text-sm
                                                    relative
                                                    inline-block
                                                    text-transparent
                                                    bg-clip-text
                                                    bg-[linear-gradient(90deg,#333_0%,#666_45%,#fff_50%,#666_55%,#333_100%)]
                                                    bg-[length:300%_100%]
                                                    bg-[position:-300%_0]
                                                    hover:animate-[shine_10s_linear]                            
                                '>Thank you for your note!</span>❤️
                                </>
                            }
                        </div>
                    </div>

                    <div className="notesContainer relative w-full min-h-[95vh] overflow-hidden">
                        <div className={`absolute inset-0 ${notesView == "board" ? 'bg-[url(/gridTexture.svg)] bg-size-[auto_600px] opacity-40' : 'bg-[url(/dotTexture.svg)] bg-size-[auto_300px] opacity-70'}  bg-cover bg-center bg-repeat z-[-1]`}></div>

                        {notesView == "grid" ?
                            <div className="gridViewNotesWrapper grid grid-cols-2 justify-self-between sm:grid-cols-3 gap-5 p-5 pt-[5rem] overflow-hidden w-full">
                                {notes.map((note, idx) => {
                                    return (
                                        <NoteCard key={idx}
                                            imgUrl={note.imgUrl}
                                            name={note.name}
                                            desc={note.desc}
                                            initialRotation={note.initialRotation}
                                            isBoardView={false}

                                        />
                                    )
                                })}
                            </div>
                            :
                            <div className="dragViewNotesWrapper  pt-[5rem] w-full">
                                {boardNotes.map((note, idx) => {
                                    return (
                                        <NoteCard key={idx}
                                            imgUrl={note.imgUrl}
                                            name={note.name}
                                            desc={note.desc}
                                            initialRotation={note.initialRotation}
                                            initialX={note.initialX}
                                            initialY={note.initialY}
                                            isBoardView={true}
                                        />
                                    )
                                })}
                            </div>
                        }

                        {(!isFirstLoad && hasMore && notesView == "grid") && (
                            <div className="w-full flex justify-center py-8">
                                <Button
                                    onClick={() => fetchNotes()}
                                    disabled={loading}
                                    className="px-6 py-3 rounded-md border border-zinc-300 bg-primary hover:bg-primary/80 cursor-pointer transition disabled:opacity-50"
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-2">
                                            See more
                                            <Loader2 color='#fafafa' className='animate-spin' />
                                        </div>
                                    ) : (
                                        <>
                                            See more <ChevronDown />
                                        </>
                                    )}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                <Dialog open={isAddNoteDialogOpen} onOpenChange={setIsAddNoteDialogOpen}>
                    <DialogTitle></DialogTitle>
                    <DialogContent className="!max-w-[350px] sm:!max-w-[350px] lg:max-w-[350px] p-2 max-h-[calc(100dvh-1rem)] bg-zinc-50 overflow-y-auto gap-2 z-[99999] border border-zinc-400">
                        <SketchPanel ref={sketchPanelRef} />
                        <div className="space-y-2">
                            <Input name='name' id='name'
                                type='text'
                                maxLength={20}
                                value={newNoteState.name}
                                onChange={(e) => setNewNoteState(prev => ({ ...prev, name: e.target.value }))}
                                placeholder='Name' className='text-xs border-zinc-400/70 font-mono' />
                        </div>
                        <div className="space-y-2">
                            <Input name='desc' id='desc'
                                type='text'
                                maxLength={35}
                                value={newNoteState.desc}
                                onChange={(e) => setNewNoteState(prev => ({ ...prev, desc: e.target.value }))}
                                placeholder='Type your note...' className='text-xs border-zinc-400/70 font-mono' />
                        </div>
                        <DialogFooter className="justify-end flex-row">
                            <DialogClose asChild>
                                <Button type="button" variant="outline" className='cursor-pointer h-[30px] border border-zinc-400/80'>
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="button" onClick={handleSaveNote}
                                disabled={!newNoteState.name || !newNoteState.desc || isFormSubmitting}
                                variant="default" className='cursor-pointer border border-zinc-400/80 h-[30px]'>
                                Save {isFormSubmitting && <Loader2 color='#fafafa' className='animate-spin' />}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}

export default Visitors