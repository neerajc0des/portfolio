"use client"

import React, { useState } from 'react'
import { Github, House, Instagram, Linkedin, Menu, ScrollText, Sparkles, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


const MobileNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };
    return (
        <>
            <header className="flex md:hidden items-center justify-between fixed top-0 z-[9999]  p-5 w-full border border-zinc-200 bg-white/65 backdrop-blur-lg text-zinc-700">
                <Link href="/" title="Home" className='hover:opacity-80 px-2'>
                    <House strokeWidth='2' size={22} />
                </Link>
                <span
                    className={`
            navTrigger
            hover:opacity-80
            px-2
            cursor-pointer
            transition-transform duration-200 ease-in-out 
            ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'} 
          `}
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <X strokeWidth='2' size={22} />
                    ) : (
                        <Menu strokeWidth='2' size={22} />
                    )}
                </span>
            </header>
            <div className={`mobile-nav-menu md:hidden fixed ${isMobileMenuOpen ? "top-[65px] opacity-100 z-[9999]" : "top-[40px]   opacity-0"} transition-all duration-300 ease-in-out left-0 right-0 pb-5 bg-white/65 backdrop-blur-lg border-b border-zinc-200 shadow-lg max-w-full overflow-hidden flex flex-col`}>
                <a href="https://github.com/neerajc0des" title="Github" target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-lg py-5 px-7 hover:bg-gray-50 hover:translate-x-1 transition-all duration-300 ease-in-out'>
                    <Github strokeWidth='2' size={25} /> GitHub
                </a>

                <a href="http://instagram.com/neerajc0des" title="Instagram" className='flex items-center gap-3 text-lg py-5 px-7 hover:bg-gray-50 hover:translate-x-1 transition-all duration-300 ease-in-out'>
                    <Instagram strokeWidth='2' size={25} /> Instagram
                </a>

                <a href="https://www.linkedin.com/in/neerajc0des" title="Linkedin" target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-lg py-5 px-7 hover:bg-gray-50 hover:translate-x-1 transition-all duration-300 ease-in-out'>
                    <Linkedin strokeWidth='2' size={25} /> Linkedin
                </a>

                <Link
                    href="/projects"
                    className='cursor-pointer flex items-center gap-3 text-lg py-5 px-7 hover:bg-gray-50 hover:translate-x-1 transition-all duration-300 ease-in-out'
                    title="Projects"
                    onClick={()=>setIsMobileMenuOpen(false)}
                >
                    <Sparkles strokeWidth='2' size={25} /> Projects
                </Link>

                <a href="https://hashnode.com/@neerajc0des" title="Blog" target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-lg py-5 px-7 hover:bg-gray-50 hover:translate-x-1 transition-all duration-300 ease-in-out'>
                    <ScrollText strokeWidth='2' size={25} className='transition-all duration-200 ease-in-out' /> Blog
                </a>
                <Button asChild type="button" variant={'default'} className='cursor-pointer rounded-xl py-6 w-auto mx-7 text-base hover:translate-x-1 transition-all duration-300 ease-in-out'>
                    <Link href="/visitors" onClick={()=>setIsMobileMenuOpen(false)}><Users size={'25px'} /> Visitors</Link>
                </Button>
            </div>
        </>
    )
}

export default MobileNav