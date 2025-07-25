"use client"

import { House, Users, Github, Instagram, Linkedin, ScrollText, Scroll, Sparkles, Sparkle } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link';

const Navbar = () => {
  const [isSparkleHovered, setIsSparkleHovered] = useState(false);
  const [isBlogHover, setIsBlogHover] = useState(false);

  return (
    <div className='navContainer z-[9999]'>
      
        <div className="flex items-center pl-4 p-2 rounded-2xl overflow-hidden shadow-sm liquid-glass-container text-zinc-700 w-fit ">
          <Link href="/" title="Home" className='hover:opacity-80 pl-3 l-screen-nav-item'>
            <House strokeWidth='2' size={22} />
          </Link>
          <div className="w-px h-5 bg-zinc-200 mx-6"></div>
          <div className="space-x-8 flex items-center">
            <a href="https://github.com/neerajc0des" title="Github" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 l-screen-nav-item'>
              <Github strokeWidth='2' size={22} />
            </a>

            <a href="http://instagram.com/neerajc0des" title="Instagram" className='hover:opacity-80 l-screen-nav-item group'>
              <Instagram strokeWidth='2' size={22} className='group-hover:stroke-[#C13584] transition duration-150' />
            </a>

            <a href="https://www.linkedin.com/in/neerajc0des" title="Linkedin" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 group l-screen-nav-item'>
              <Linkedin strokeWidth='2' size={22} className='group-hover:stroke-[#0077B5] transition duration-150' />
            </a>

            <Link
              href="/projects"
              className='cursor-pointer hover:opacity-80 l-screen-nav-item'
              title="Projects"
              onMouseEnter={() => setIsSparkleHovered(true)}
              onMouseLeave={() => setIsSparkleHovered(false)}
            >
              {isSparkleHovered ? (
                <Sparkle strokeWidth='2' size={22} fill='yellow' className='mt-[-2px] transition-all duration-200 ease-in-out ' />
              ) : (
                <Sparkles strokeWidth='2' size={22} />
              )}
            </Link>

            <a href="https://hashnode.com/@neerajc0des" title="Blog" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 l-screen-nav-item'
              onMouseEnter={() => setIsBlogHover(true)}
              onMouseLeave={() => setIsBlogHover(false)}
            >
              {isBlogHover ? (
                <Scroll strokeWidth='2' size={22} className='mt-[-2px] transition-all duration-200 ease-in-out' />
              ) : (
                <ScrollText strokeWidth='2' size={22} className='transition-all duration-200 ease-in-out' />
              )}
            </a>
          </div>
          <div className="w-px h-5 bg-zinc-200 mx-8"></div>
          <Button asChild type="button" variant={'default'} className='cursor-pointer rounded-xl py-6 min-w-[190px] text-base l-screen-nav-item'>
            <Link href="/visitors"><Users size={'25px'} /> Visitors</Link>
          </Button>
        </div>

      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion">
          <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
        </filter>
      </svg>
    </div>
  )
}

export default Navbar