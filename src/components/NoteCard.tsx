"use client"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface NoteCardProps {
    imgUrl: string;
    name: string;
    desc: string;
    initialRotation: number;
    isBoardView?: boolean;
    initialX?: number;
    initialY?: number;
}

const NoteCard = ({ imgUrl, name, desc, initialRotation, isBoardView = false, initialX, initialY }: NoteCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const draggableRef = useRef<Draggable | null>(null);


    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        requestAnimationFrame(() => {
            gsap.set(el, {
                rotation: initialRotation,
                ...(isBoardView && {
                    x: initialX,
                    y: initialY,
                }),
            });

            if (isBoardView) {
                draggableRef.current?.kill();
                draggableRef.current = Draggable.create(el, {
                    bounds: ".notesContainer",
                    type: "x,y",
                    inertia: true,
                    zIndexBoost: true,
                })[0];
            } else {
                gsap.set(el, { clearProps: "x,y" });
            }
        });

        return () => {
            draggableRef.current?.kill();
            draggableRef.current = null;
        };
    }, [isBoardView, initialRotation]);

    useEffect(() => {
        console.log(`[${name}] rotation set to:`, initialRotation);
    }, []);


    return (
        <div
            ref={cardRef}
            className={`noteItem ${isBoardView ? 'absolute' : ''} bg-background rounded-md shadow-lg overflow-hidden transition-all duration-300  ${isBoardView ? 'w-[10rem]' : 'w-full sm:w-[10rem]'} p-2 border-zinc-200 border ${isBoardView ? 'active:cursor-grabbing' : ''}`}
            style={{
                zIndex: isHovered ? 10 : undefined,
                transform: `rotate(${initialRotation}deg)`,
            }}
            onMouseEnter={() => {
                setIsHovered(true);
                gsap.to(cardRef.current, { rotation: 0, duration: 0.2 });
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                gsap.to(cardRef.current, { rotation: initialRotation, duration: 0.2 });
            }}

        >

            <img src={imgUrl} alt="note Image" width={'100%'} className="w-full h-[8rem] object-contain rounded-sm border pointer-events-none" />
            <div className="space-y-2 mt-2 font-mono pointer-events-none">
                <h3 className="text-xs text-muted w-full font-semibold truncate mb-1">{name}</h3>
                <p className="text-primary text-xs font-semibold">{desc}</p>
            </div>
        </div>
    )
}

export default NoteCard