import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageCircle, CircleDot, Link, Github, Globe, Menu, House, X, Instagram, Linkedin, Sparkles, Users, ScrollText } from 'lucide-react'
import RevealOnScroll from "@/components/RevealOnscroll";

const Projects = () => {
  return (
    <div className='mx-auto bg-zinc-50/10 relative'>
      <div className="main-container sm:px-6 lg:px-10 relative max-w-2xl pt-[100px] sm:pt-[130px] md:pt-[150px] lg:pt-[200px] mx-auto flex flex-col justify-center px-4 gap-8">
        <section className="projectsSection flex flex-col gap-10">
          <RevealOnScroll>
            <h1 className="sectionHeader text-xl md:text-2xl font-semibold capitalize text-left">My Projects</h1>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="proj0 p-2 lg:p-5 border border-zinc-200 rounded-md">
              <div className="projImg relative w-[100%] h-[250px] md:h-[300px] border border-zinc-200 lg:h-[335px] rounded-md overflow-hidden">
                <Image fill className="object-cover object-top w-full h-full" src={'/canvaslyScreenshot.png'} alt="canvasly screenshot" />
              </div>
              <div className="projContent space-y-2">
                <h1 className="text-base lg:text-lg mt-5 font-semibold">Canvasly</h1>
                <p className="text-sm text-paragraph">
                  A demo for Canvasly, the React NPM package I created, showcasing interactive drawing with customizable tools, essential controls, and PNG export. Responsive across all devices.
                </p>
                <div className="tagContainer flex flex-wrap items-center gap-2 mt-2 lg:mt-5">
                  <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">React js</span>
                  <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">react-sketch-canvas</span>
                  <span className="bg-border text-primary py-1 px-4 rounded-md text-xs lg:text-sm">Tailwind css</span>
                </div>
                <div className="cta-container space-x-2 mt-2 lg:mt-5">
                  <Button asChild type="button" variant="outline" className="cursor-pointer">
                    <a href="https://github.com/neerajc0des/weatherappnext" target="_blank" rel="noopener noreferrer">
                      <Github /> Source
                    </a>
                  </Button>
                  <Button asChild type="button" variant="default" className="cursor-pointer">
                    <a href="https://github.com/neerajc0des/canvasly-demo" target="_blank" rel="noopener noreferrer">
                      <Globe /> Visit
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="proj1 p-2 lg:p-5 border border-zinc-200 rounded-md">
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
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="proj2 p-2 lg:p-5 border border-zinc-200 rounded-md">
              <div className="projImg relative w-[100%] h-[250px] md:h-[300px] border border-zinc-200 lg:h-[335px] rounded-md overflow-hidden">
                <Image fill className="object-cover object-top w-full h-full" src={'/29bytesScreenshot.png'} alt="weather project" />
              </div>
              <div className="projContent space-y-2">
                <h1 className="text-base lg:text-lg mt-5 font-semibold">29 Bytes Landing Page</h1>
                <p className="text-sm text-paragraph">
                  A soft pastel-themed landing page for 29 Bytes, a product-focused startup. Features a clean layout, smooth interactions, and a functional contact form.
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
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="proj3 p-2 lg:p-5 border border-zinc-200 rounded-md ">
              <div className="projImg relative w-[100%] h-[250px] md:h-[300px] border border-zinc-200 lg:h-[335px] rounded-md overflow-hidden">
                <Image fill className="object-cover object-top w-full h-full" src={'/inkxScreenshot.png'} alt="weather project" />
              </div>
              <div className="projContent space-y-2">
                <h1 className="text-base lg:text-lg mt-5 font-semibold">Inkx</h1>
                <p className="text-sm text-paragraph">
                  Inkx is a modern art shop, inspired by my sister's talent, designed to turn her art into an online brand. I built the frontend with a clean, aesthetic vibe to match the products.
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
          </RevealOnScroll>

        </section>
      </div>
    </div>
  )
}

export default Projects