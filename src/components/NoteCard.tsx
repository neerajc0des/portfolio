"use client"
import React, { useEffect, useState } from 'react'

interface NoteCardProps {
    imgUrl: string;
    name: string;
    desc: string;
    initialRotation: number;
}

const NoteCard = ({ imgUrl, name, desc, initialRotation }:NoteCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    
    return (
        <div 
            style={{ transform: `rotate(${isHovered ? 0 : initialRotation}deg)` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="noteItem bg-background rounded-md shadow-lg overflow-hidden transition-all duration-300 w-[10rem] p-2 border-zinc-200 border">

            <img src={imgUrl} alt="note Image" width={'100%'} className="w-full h-[8rem] object-contain rounded-sm border" />
            <div className="space-y-2 mt-2 font-mono">
                <h3 className="text-xs text-muted w-full font-semibold truncate mb-1">{name}</h3>
                <p className="text-primary text-xs font-semibold">{desc}</p>
            </div>
        </div>
    )
}

export default NoteCard