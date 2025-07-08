"use client"

import { House, Users, Github, Instagram, Linkedin, ScrollText, Sparkles } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className=''>
      <div className="flex items-center pl-4 p-2 rounded-2xl border border-zinc-200 bg-white/65 backdrop-blur-lg text-zinc-700 w-fit">
        <a href="/" title="Home" className='hover:opacity-80 pl-3'>
          <House strokeWidth='2'  size={22}/>
        </a>
        <div className="w-px h-5 bg-zinc-200 mx-6"></div>
        <div className="space-x-8 flex items-center">
          <a href="/" title="Github" className='hover:opacity-80'>
            <Github strokeWidth='2'  size={22}/>
          </a>

          <a href="/" title="Instagram" className='hover:opacity-80'>
            <Instagram strokeWidth='2'  size={22}/>
          </a>

          <a href="/" title="Linkedin" className='hover:opacity-80'>
            <Linkedin strokeWidth='2'  size={22}/>
          </a>
          <a href="/" title="Projects" className='hover:opacity-80'>
            <Sparkles strokeWidth='2' size={22}/>
          </a>

          <a href="/" title="Blog" className='hover:opacity-80'>
            <ScrollText strokeWidth='2'  size={22}/>
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