"use client"

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from 'react';
import { MessageCircle, CircleDot, Link, Github, Globe, Menu, House, X, Instagram, Linkedin, Sparkles, Users, ScrollText } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll';


export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };


  return (
    <div className="mx-auto bg-zinc-50/10 relative">
      <header className="navContainer hidden md:flex items-center justify-center fixed top-10 z-50  px-4 py-3 w-full">
        <Navbar />
      </header>

      <header className="flex md:hidden items-center justify-between fixed top-0 z-50  p-5 w-full border border-zinc-200 bg-white/65 backdrop-blur-lg text-zinc-700">
        <a href="/" title="Home" className='hover:opacity-80 px-2'>
          <House strokeWidth='2' size={22} />
        </a>
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

        {isMobileMenuOpen &&
          <div className="mobile-nav-menu fixed top-15 border-t border-zinc-200 left-0 z-55 py-4 px-7 w-full bg-white/65 backdrop-blur-lg text-zinc-700 flex flex-col gap-5">
            <a href="https://github.com/neerajc0des" title="Github" target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-lg'>
              <Github strokeWidth='2' size={25} /> Github
            </a>

            <a href="http://instagram.com/neerajc0des" title="Instagram" className='flex items-center gap-3 text-lg'>
              <Instagram strokeWidth='2' size={25} /> Instagram
            </a>

            <a href="https://www.linkedin.com/in/neerajc0des" title="Linkedin" target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-lg'>
              <Linkedin strokeWidth='2' size={25} /> Linkedin
            </a>

            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer flex items-center gap-3 text-lg'
              title="Projects"
            >
              <Sparkles strokeWidth='2' size={25} /> Projects
            </ScrollLink>

            <a href="https://hashnode.com/@neerajc0des" title="Blog" target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-lg'>
              <ScrollText strokeWidth='2' size={25} className='transition-all duration-200 ease-in-out' /> Blog
            </a>
            <Button type="button" variant={'default'} className='cursor-pointer rounded-xl py-6 min-w-[190px] text-base'>
              <Users size={'25px'} /> Visitor notes
            </Button>
          </div>
        }
      </header>

      <div className="main-container sm:px-6 lg:px-10 relative max-w-2xl pt-[100px] sm:pt-[130px] md:pt-[150px] lg:pt-[200px] mx-auto flex flex-col justify-center px-4 gap-8">
        <div className="pfp-container w-full pt-5">
          <img src="/pfp.jpg" className="w-24 h-24 rounded-full" alt="avatar" />
        </div>

        <div className="hero-heading flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight lg:leading-[1.2]">
            Hey, I'm Neeraj. <br />
            Engineer & Designer.
          </h1>
          <p className="hero-desc text-base lg:text-lg text-paragraph">
            Most designers can't code. Most developers can't design.
            I do both. Turning ideas into products for last 1 year.
          </p>
        </div>

        <div className="cta-container flex gap-5 items-center">
          <Button asChild type="button" className="cursor-pointer py-6 w-auto px-10 rounded-xl flex-1 md:flex-none">
            <a href="mailto:n33raj.kr@gmail.com">
              <MessageCircle /> Send Message
            </a>
          </Button>
          <Button type="button" variant="default" className="py-6 bg-green-100 text-[#1D6D0B] rounded-full hover:bg-green-100 text-xs md:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D6D0B] opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#1D6D0B]"></span>
            </span>
            <span className="hidden md:block">Open to opportunities</span>
            <span className="md:hidden block">Available</span>
          </Button>
        </div>

        <section className="aboutSection flex flex-col gap-5 mt-5 md:mt-10">
          <h1 className="sectionHeader text-xl md:text-2xl font-semibold">About</h1>
          <div className="sectionContent text-muted">
            I'm Neeraj. Software dev based in Delhi, born in Madhya Pradesh.
            Currently pursuing MCA at Delhi University.
            <br /><br />
            I've worked as a frontend developer for 6 months, shipping real-world products and collaborating closely with cross-functional teams. I care about the details — every pixel, every transition, every interaction.
            <br /><br />
            I don't just build interfaces. I craft interfaces that work.
          </div>

          <div className="skills-container grid grid-cols-4 p-2 gap-2 cursor-[url(/circleCursor.svg)_2_2,_pointer]">
            <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2">
              <span className="icon-container w-full flex justify-center">
                <i className="devicon-html5-plain text-foreground text-2xl lg:text-2xl skill-icon"></i>
              </span>
              <span className="skill-name text-muted text-xs hidden md:block">HTML 5</span>
            </div>
            <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2">
              <span className="icon-container w-full flex justify-center">
                <i className="devicon-css3-plain text-foreground text-2xl lg:text-2xl skill-icon"></i>
              </span>
              <span className="skill-name text-muted text-xs hidden md:block">CSS</span>
            </div>
            <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2">
              <span className="icon-container w-full flex justify-center">
                <i className="devicon-typescript-plain text-foreground text-2xl lg:text-2xl skill-icon"></i>
              </span>
              <span className="skill-name text-muted text-xs hidden md:block">TypeScript</span>
            </div>
            <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2">
              <span className="icon-container w-full flex justify-center">
                <i className="devicon-figma-plain text-foreground text-2xl lg:text-2xl skill-icon"></i>
              </span>
              <span className="skill-name text-muted text-xs hidden md:block">Figma</span>
            </div>
            <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2">
              <span className="icon-container w-full flex justify-center">
                <i className="devicon-tailwindcss-plain text-foreground text-2xl lg:text-2xl skill-icon"></i>
              </span>
              <span className="skill-name text-muted text-xs hidden md:block">Tailwind</span>
            </div>
            <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2">
              <span className="icon-container w-full flex justify-center">
                <i className="devicon-nextjs-plain text-foreground text-2xl lg:text-2xl skill-icon"></i>
              </span>
              <span className="skill-name text-muted text-xs hidden md:block">NextJs</span>
            </div>
            <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2">
              <span className="icon-container w-full flex justify-center">
                <i className="devicon-redux-plain text-foreground text-2xl lg:text-2xl skill-icon"></i>
              </span>
              <span className="skill-name text-muted text-xs hidden md:block">Redux</span>
            </div>
            <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2">
              <span className="icon-container w-full flex justify-center">
                <i className="devicon-react-plain text-foreground text-2xl lg:text-2xl skill-icon"></i>
              </span>
              <span className="skill-name text-muted text-xs hidden md:block">ReactJs</span>
            </div>


          </div>
        </section>

        <div className="h-px mx-auto my-5 w-[150px] lg:w-full lg:my-10 bg-zinc-200"></div>

        <section className="expSection flex flex-col gap-10">
          <h1 className="sectionHeader text-xl md:text-2xl font-semibold">Work Experience</h1>
          <div className="sectionContent text-muted space-y-6 md:space-y-8">
            <div className="workItem flex flex-col md:flex-row md:items-center gap-2 md:justify-between">
              <div className="duration text-[#A1A1AA] text-sm md:text-base w-[300px]">Mar 2025 - Present</div>
              <div className="work flex items-center flex-1 justify-start gap-2">
                <p className="text-paragraph">Co-Founder at</p>
                <Button asChild className="cursor-pointer bg-[#FFF2CD] hover:bg-[#FFF2CD] border border-[#EDCD79] text-[#E18433]">
                  <a href="https://29bytes.com" target="_blank" rel="noopener noreferrer">
                    <Link /> 29 Bytes
                  </a>
                </Button>
              </div>
            </div>

            <div className="workItem flex flex-col md:flex-row md:items-center gap-2 md:justify-between">
              <div className="duration text-[#A1A1AA] text-sm md:text-base w-[300px]">Oct 2024 - Feb 2025</div>
              <div className="work flex items-center flex-1 justify-start gap-2">
                <p className="text-paragraph">Frontend Dev at</p>
                <Button asChild className="cursor-pointer bg-[#F7EFFF] hover:bg-[#F7EFFF] border border-[#8A429E] text-[#8A429E]">
                  <a href="https://primegurukul.com/" target="_blank" rel="noopener noreferrer">
                    <Link /> PrimeGurukul
                  </a>
                </Button>
              </div>
            </div>

            <div className="workItem flex flex-col md:flex-row md:items-center gap-2 md:justify-between">
              <div className="duration text-[#A1A1AA] text-sm md:text-base w-[300px]">Feb 2023 -  Oct 2023</div>
              <div className="work flex items-center flex-1 justify-start gap-2">
                <p className="text-paragraph">COMEST(College Society) Tech Lead</p>
              </div>
            </div>
          </div>
        </section>

        <div id="projects" className="h-px mx-auto my-5 w-[150px] lg:w-full lg:my-10 bg-zinc-200"></div>

        <section className="projectsSection flex flex-col gap-10">
          <h1 className="sectionHeader text-xl md:text-2xl font-semibold capitalize text-center">Here's is what i've been up to.</h1>
          <div className="proj1 p-2 lg:p-5 border border-zinc-200 rounded-md mx-2 lg:mx-5">
            <div className="projImg relative w-[100%] h-[250px] md:h-[300px] border border-zinc-200 lg:h-[335px] rounded-md overflow-hidden">
              <Image fill className="object-cover object-top w-full h-full" src={'/weatherProjectScreenshot.png'} alt="weather project" />
            </div>
            <div className="projContent space-y-2">
              <h1 className="text-base lg:text-lg mt-5 font-semibold">Live weather website</h1>
              <p className="text-sm text-paragraph">
                Real-time weather, right where you are. Temp, UV, air quality — all in one view. Explore cities with interactive maps. Clean, clear, and made for everyday use.
              </p>
              <div className="tagContainer flex flex-wrap items-center gap-2 mt-2 lg:mt-5">
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Next js</span>
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Leaflet</span>
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Tailwind css</span>
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Open weather api</span>
              </div>
              <div className="cta-container space-x-2 mt-2 lg:mt-5">
                <Button asChild type="button" variant="outline" className="cursor-pointer">
                  <a href="https://github.com/neerajc0des/weatherappnext" target="_blank" rel="noopener noreferrer">
                    <Github /> Source
                  </a>
                </Button>
                <Button asChild type="button" variant="default" className="cursor-pointer">
                  <a href="https://weatherappneeraj.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Globe /> Visit
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="proj2 p-2 lg:p-5 border border-zinc-200 rounded-md mx-2 lg:mx-5">
            <div className="projImg relative w-[100%] h-[250px] md:h-[300px] border border-zinc-200 lg:h-[335px] rounded-md overflow-hidden">
              <Image fill className="object-cover object-top w-full h-full" src={'/29bytesScreenshot.png'} alt="weather project" />
            </div>
            <div className="projContent space-y-2">
              <h1 className="text-base lg:text-lg mt-5 font-semibold">29 Bytes Landing Page</h1>
              <p className="text-sm text-paragraph">
                A soft pastel-themed landing page crafted for 29 Bytes, a product-focused startup. Clean layout, smooth interactions, and a modern aesthetic that reflects the brand.Built to convert — with clear sections, subtle animations, and a functional contact form. Simple, elegant, and straight to the point — just like the company it represents.
              </p>
              <div className="tagContainer flex flex-wrap items-center gap-2 mt-2 lg:mt-5">
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">React</span>
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Web3Forms</span>
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Tailwind css</span>
              </div>
              <div className="cta-container space-x-2 mt-2 lg:mt-5">
                <Button type="button" variant="outline" disabled className="cursor-pointer">
                  <Github /> Source
                </Button>
                <Button asChild type="button" variant="default" className="cursor-pointer">
                  <a href="https://29bytes.com" target="_blank" rel="noopener noreferrer">
                    <Globe /> Visit
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="proj3 p-2 lg:p-5 border border-zinc-200 rounded-md mx-2 lg:mx-5">
            <div className="projImg relative w-[100%] h-[250px] md:h-[300px] border border-zinc-200 lg:h-[335px] rounded-md overflow-hidden">
              <Image fill className="object-cover object-top w-full h-full" src={'/inkxScreenshot.png'} alt="weather project" />
            </div>
            <div className="projContent space-y-2">
              <h1 className="text-base lg:text-lg mt-5 font-semibold">Inkx</h1>
              <p className="text-sm text-paragraph">
                Inkx was my take on building a modern art shop — selling paintings, portraits, bookmarks, and more. Inspired by my sister's talent, the idea was to turn her art into an online brand. I designed and built the frontend with a clean, aesthetic vibe to match the products.
                The project's on pause (thanks, exams) — but it's still one of my favorite starts.
              </p>
              <div className="tagContainer flex flex-wrap items-center gap-2 mt-2 lg:mt-5">
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Next js</span>
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Shadcn</span>
                <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Tailwind css</span>
              </div>
              <div className="cta-container space-x-2 mt-2 lg:mt-5">
                <Button type="button" variant="outline" disabled className="cursor-pointer">
                  <Github /> Source
                </Button>
                <Button asChild type="button" variant="default" className="cursor-pointer">
                  <a href="https://inkx-ecom.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Globe /> Visit
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </section>

        <div className="h-px mx-auto my-5 w-[150px] lg:w-full lg:my-10 bg-zinc-200"></div>

        <section className="ContactSection flex flex-col gap-5">
          <h1 className="sectionHeader text-xl md:text-2xl font-semibold">Get in touch</h1>
          <p className="text-muted text-sm lg:text-base">
            Got an idea that needs a sharp frontend and clean design? I turn concepts into slick, functional interfaces that just work. I'm all about building things that feel good and get results. <br />
            Let's build something real — hit me up if you're not here to waste time.
          </p>
          <div className="ctafooter">
            <Button asChild type="button" className="cursor-pointer py-6 w-auto px-10 rounded-xl">
              <a href="mailto:n33raj.kr@gmail.com">
                <MessageCircle /> Send Message
              </a>
            </Button>
          </div>
        </section>

        <div className="h-px mx-auto my-5 w-[150px] lg:w-full lg:my-10 bg-zinc-200"></div>

        <div className="footer text-center text-sm lg:text-base text-[#A1A1AA] pb-8">
          Copyright © 2025 Neeraj <br />
          All rights reserved.
        </div>
      </div>
    </div>
  );
}
