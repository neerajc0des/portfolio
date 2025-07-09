"use client"

import { House, Users, Github, Instagram, Linkedin, ScrollText, Scroll, Sparkles, Sparkle } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isSparkleHovered, setIsSparkleHovered] = useState(false);
  const [isBlogHover, setIsBlogHover] = useState(false);

  return (
    <div className='navContainer'>
      <div className="flex items-center pl-4 p-2 rounded-2xl border border-zinc-200 bg-white/65 backdrop-blur-lg text-zinc-700 w-fit">
        <a href="/" title="Home" className='hover:opacity-80 pl-3'>
          <House strokeWidth='2' size={22} />
        </a>
        <div className="w-px h-5 bg-zinc-200 mx-6"></div>
        <div className="space-x-8 flex items-center">
          <a href="https://github.com/neerajc0des" title="Github" target="_blank" rel="noopener noreferrer" className='hover:opacity-80'>
            <Github strokeWidth='2' size={22} />
          </a>

          <a href="http://instagram.com/neerajc0des" title="Instagram" className='hover:opacity-80'>
            <Instagram strokeWidth='2' size={22} />
          </a>

          <a href="https://www.linkedin.com/in/neerajc0des" title="Linkedin" target="_blank" rel="noopener noreferrer" className='hover:opacity-80'>
            <Linkedin strokeWidth='2' size={22} />
          </a>

          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='cursor-pointer hover:opacity-80'
            title="Projects"
            onMouseEnter={()=>setIsSparkleHovered(true)}
            onMouseLeave={() => setIsSparkleHovered(false)}
          >
            {isSparkleHovered ? (
              <Sparkle strokeWidth='2' size={22} className='mt-[-2px] transition-all duration-200 ease-in-out ' />
            ) : (
              <Sparkles strokeWidth='2' size={22} />
            )}
          </ScrollLink>

          <a href="https://hashnode.com/@neerajc0des" title="Blog" target="_blank" rel="noopener noreferrer" className='hover:opacity-80'
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
        <Button type="button" variant={'default'} className='cursor-pointer rounded-xl py-6 min-w-[190px] text-base'>
          <Users size={'25px'} /> Visitor notes
        </Button>
      </div>
    </div>
  )
}

export default Navbar