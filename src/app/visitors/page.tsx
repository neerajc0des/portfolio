"use client"
import NoteCard from '@/components/NoteCard'
import SketchPanel from '@/components/SketchPanel'
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
        imgUrl: "/noteThumb.jpg",
        name: "Tyson",
        desc: "A very cool portfolio, I'll copy this!"
    },
    {
        imgUrl: "/noteThumb.jpg",
        name: "Mark T.",
        desc: "Fantastic attention to detail. This portfolio really stands out!"
    },
    {
        imgUrl: "/noteThumb.jpg",
        name: "Alex P.",
        desc: "The real-time user feature is a brilliant touch. Great job!"
    },
    {
        imgUrl: "/noteThumb.jpg",
        name: "Emily R.",
        desc: "So impressed with the creativity and execution. A true masterclass."
    },
    {
        imgUrl: "/noteThumb.jpg",
        name: "Chris L.",
        desc: "This is exactly what I needed to see for inspiration. Thank you!"
    },
    {
        imgUrl: "/noteThumb.jpg",
        name: "Olivia M.",
        desc: "Sleek, modern, and highly functional. Excellent work!"
    },
    {
        imgUrl: "/noteThumb.jpg",
        name: "Daniel S.",
        desc: "The notes section is a clever idea, very well implemented."
    }
]

const Visitors = () => {
    const [isAddNoteDialogOpen, setIsAddNoteDialogOpen] = useState(false)
    const [notesView, setNotesView] = useState("grid");
    const [notesWithRandomRotation, setNotesWithRandomRotation] = useState([{
        imgUrl: "/noteThumb.jpg",
        name: "Tyson",
        desc: "A very cool portfolio, I'll copy this!",
        initialRotation: 0,
        initialX: 0,
        initialY: 0
    }])

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
        const notes = notesData.map(note => ({
            ...note,
            initialRotation: getRandomRotation(),
            initialX: Math.floor(Math.random() * 300),
            initialY: Math.floor(Math.random() * 400),
        }));
        setNotesWithRandomRotation(notes);
    }, []);


    return (
        <div className='mx-auto bg-zinc-50/10'>
            <div className="main-container sm:px-6 lg:px-10 relative max-w-2xl pt-[100px] sm:pt-[130px] md:pt-[150px] lg:pt-[200px] mx-auto flex flex-col justify-center px-4 gap-8">
                <div className="wrapper border border-zinc-300 rounded-sm shadow-sm w-full relative">
                    <div className="notesNav p-2 w-full z-40 bg-zinc-200/50 border-b border-zinc-200 rounded-t-sm flex items-center justify-between backdrop-blur-lg absolute top-0">
                        <div className="leftNav flex gap-5 items-center">
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
                                {notesWithRandomRotation.map((note, idx) => {
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
                    <DialogContent className="w-fit p-2 max-h-[calc(100dvh-1rem)] bg-[#f2f2f2] overflow-y-auto gap-2 z-[99999]">
                            <SketchPanel />
                            <div className="space-y-2">
                                <Input name='name' id='name' placeholder='Name' className='text-xs border-zinc-300 font-mono'/>
                            </div>
                            <div className="space-y-2">
                                <Input name='note' id='note' placeholder='Type your note...' className='text-xs border-zinc-300 font-mono'/>
                            </div>
                        <DialogFooter className="justify-end flex-row">
                            <DialogClose asChild>
                                <Button type="button" variant="outline" className='cursor-pointer h-[30px]'>
                                    Close
                                </Button>
                            </DialogClose>
                            <Button type="button" variant="default" className='cursor-pointer border border-zinc-300 h-[30px]'>
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