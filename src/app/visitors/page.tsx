"use client"
import NoteCard from '@/components/NoteCard'
import SketchPanel, { SketchPanelHandle } from '@/components/SketchPanel'
import { Button } from '@/components/ui/button'
import { LayoutGrid, Plus, SquareDashedMousePointer } from 'lucide-react'
import React, { useEffect, useState, useRef } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const notesData = [
    {
        imgUrl: "/noteThumb300x300.png",
        name: "Tyson",
        desc: "Awesome portfolio!"
    },
    {
        imgUrl: "/noteThumb300x300.png",
        name: "Mark T.",
        desc: "Great attention to detail!"
    },
    {
        imgUrl: "/noteThumb300x300.png",
        name: "Alex P.",
        desc: "Real-time user feature is 💯"
    },
    {
        imgUrl: "/noteThumb300x300.png",
        name: "Olivia M.",
        desc: "Sleek, modern, functional."
    },
    {
        imgUrl: "/noteThumb300x300.png",
        name: "Daniel S.",
        desc: "Clever notes section."
    }
];

const Visitors = () => {
    const sketchPanelRef = useRef<SketchPanelHandle>(null);
    const [isAddNoteDialogOpen, setIsAddNoteDialogOpen] = useState(false)
    const [notesView, setNotesView] = useState("grid");
    const [notesWithRandomRotation, setNotesWithRandomRotation] = useState([{
        imgUrl: "/noteThumb300x300.png",
        name: "Automated",
        desc: "Notes section working cool!",
        initialRotation: 0,
        initialX: 0,
        initialY: 0
    }])

    const [newNoteState, setNewNoteState] = useState<{
        name: string;
        desc: string;
        imgUrl: string | null;
    }>({
        name: "",
        desc: "",
        imgUrl: "",
    });

    // console.log(newNoteState);


    const handleSaveNote = async () => {
        if (!sketchPanelRef.current) return;

        try {
            const img = await sketchPanelRef.current.exportDrawing();
            const newNote = {
                ...newNoteState,
                imgUrl: img,
                initialRotation: getRandomRotation(),
                initialX: Math.floor(Math.random() * 300),
                initialY: Math.floor(Math.random() * 400),
            };

            setNotesWithRandomRotation((prev) => {
                const updated = [...prev, newNote];
                localStorage.setItem("visitorNotes", JSON.stringify(updated));
                return updated;
            });
            setIsAddNoteDialogOpen(false);
            setNewNoteState({ name: "", desc: "", imgUrl: null });
        } catch (err) {
            console.error("Something went wrong", err);
        }
    };


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

    useEffect(() => {
        const storedNotes = localStorage.getItem("visitorNotes");
        if (storedNotes) {
            setNotesWithRandomRotation(JSON.parse(storedNotes));
        }
        else {
            const initialNotes = notesData.map(note => ({
                ...note,
                initialRotation: getRandomRotation(),
                initialX: Math.floor(Math.random() * 300),
                initialY: Math.floor(Math.random() * 400),
            }));
            setNotesWithRandomRotation(initialNotes);
            localStorage.setItem("visitorNotes", JSON.stringify(initialNotes));
        }
    }, []);


    return (
        <div className='mx-auto bg-zinc-50/10'>
            <div className="main-container sm:px-6 lg:px-10 relative max-w-2xl pt-[100px] sm:pt-[130px] md:pt-[150px] lg:pt-[200px] mx-auto flex flex-col justify-center px-4 gap-8">
                <div className="wrapper border border-zinc-300 rounded-sm shadow-sm w-full relative">
                    <div className="notesNav p-2 w-full z-40 bg-zinc-200/50 border-b border-zinc-200 rounded-t-sm flex items-center justify-between backdrop-blur-lg absolute top-0">
                        <div className="leftNav flex gap-5 items-center z-[9990]">
                            <Button type='button' variant={"ghost"} onClick={handleViewToggle} className='border border-zinc-300 hover:bg-zinc-300 cursor-pointer hover:text-primary/80 rounded-sm text-primary p-2 w-[40px] h-[40px]'>{notesView == "board" ? <LayoutGrid /> : <SquareDashedMousePointer />}</Button>
                            <div className="activeUsers flex items-center gap-3">
                                <span>1</span>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-[ping_1.5s_infinite] rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                                </span>
                            </div>
                        </div>
                        <div className="navRight">
                            <Button type='button' className='cursor-pointer py-5' onClick={() => setIsAddNoteDialogOpen(true)}><Plus /> Leave a note</Button>
                        </div>
                    </div>

                    <div className="notesContainer relative w-full min-h-[95vh] overflow-hidden">
                        <div className={`absolute inset-0 ${notesView == "board" ? 'bg-[url(/gridTexture.svg)] bg-size-[auto_600px] opacity-40' : 'bg-[url(/dotTexture.svg)] bg-size-[auto_300px] opacity-70'}  bg-cover bg-center bg-repeat z-[-1]`}></div>

                        {notesView == "grid" ?
                            <div className="gridViewNotesWrapper grid grid-cols-2 justify-self-between sm:grid-cols-3 gap-5 p-5 pt-[5rem] overflow-hidden w-full">
                                {notesWithRandomRotation.slice().reverse().map((note, idx) => {
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
                                {notesWithRandomRotation.map((note, idx) => {
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
                    </div>
                </div>

                <Dialog open={isAddNoteDialogOpen} onOpenChange={setIsAddNoteDialogOpen}>
                    <DialogTitle></DialogTitle>
                    <DialogContent className="w-fit p-2 max-h-[calc(100dvh-1rem)] bg-[#f1f1f1] overflow-y-auto gap-2 z-[99999] border border-zinc-400">
                        <SketchPanel ref={sketchPanelRef} />
                        <div className="space-y-2">
                            <Input name='name' id='name'
                                type='text'
                                max={15}
                                value={newNoteState.name}
                                onChange={(e) => setNewNoteState(prev => ({ ...prev, name: e.target.value }))}
                                placeholder='Name' className='text-xs border-zinc-400/70 font-mono' />
                        </div>
                        <div className="space-y-2">
                            <Input name='desc' id='desc'
                                type='text'
                                max={25}
                                value={newNoteState.desc}
                                onChange={(e) => setNewNoteState(prev => ({ ...prev, desc: e.target.value }))}
                                placeholder='Type your note...' className='text-xs border-zinc-400/70 font-mono' />
                        </div>
                        <DialogFooter className="justify-end flex-row">
                            <DialogClose asChild>
                                <Button type="button" variant="outline" className='cursor-pointer h-[30px] border border-zinc-400/80'>
                                    Close
                                </Button>
                            </DialogClose>
                            <Button type="button" onClick={handleSaveNote}
                                disabled={!newNoteState.name || !newNoteState.desc}
                                variant="default" className='cursor-pointer border border-zinc-400/80 h-[30px]'>
                                Save
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}

export default Visitors