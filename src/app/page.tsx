import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageCircle, CircleDot, LinkIcon, Github, Globe, Menu, House, X, Instagram, Linkedin, Sparkles, Users, ScrollText, ArrowUpRight } from 'lucide-react'
import RevealOnScroll from "@/components/RevealOnscroll";
import Link from 'next/link';



export default function Home() {


  return (
    <>

      <div className="mx-auto bg-zinc-50/10 relative">
        <div className="main-container sm:px-6 lg:px-10 relative max-w-2xl pt-[100px] sm:pt-[130px] md:pt-[150px] lg:pt-[200px] mx-auto flex flex-col justify-center px-4 gap-8">
          <RevealOnScroll className="space-y-8">
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
          </RevealOnScroll>

          <RevealOnScroll className="space-y-8">
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
                <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2 group">
                  <span className="icon-container w-full flex justify-center">
                    <i className="devicon-html5-plain text-foreground group-hover:text-[#e34c26] transition duration-200 text-2xl lg:text-2xl skill-icon"></i>
                  </span>
                  <span className="skill-name text-muted text-xs hidden md:block">HTML 5</span>
                </div>
                <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2 group">
                  <span className="icon-container w-full flex justify-center">
                    <i className="devicon-css3-plain text-foreground group-hover:text-[#663399] transition duration-200 text-2xl lg:text-2xl skill-icon"></i>
                  </span>
                  <span className="skill-name text-muted text-xs hidden md:block">CSS</span>
                </div>
                <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2 group">
                  <span className="icon-container w-full flex justify-center">
                    <i className="devicon-typescript-plain text-foreground group-hover:text-[#3178C6] transition duration-200 text-2xl lg:text-2xl skill-icon"></i>
                  </span>
                  <span className="skill-name text-muted text-xs hidden md:block">TypeScript</span>
                </div>
                <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2 group">
                  <span className="icon-container w-full flex justify-center">
                    <i className="devicon-figma-plain text-foreground
                    group-hover:bg-gradient-to-b
                    group-hover:from-[#ff7362]
                    group-hover:via-[#a25aff]
                    group-hover:via-[#19bcfe]
                    group-hover:to-[#0acf84]
                    group-hover:bg-clip-text
                    group-hover:text-transparent
                    transition duration-200 ease-in-out
                    text-2xl lg:text-2xl skill-icon">
                    </i>
                  </span>
                  <span className="skill-name text-muted text-xs hidden md:block">Figma</span>
                </div>
                <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2 group">
                  <span className="icon-container w-full flex justify-center">
                    <i className="devicon-tailwindcss-plain text-foreground group-hover:text-[#06B6D4] transition duration-200 text-2xl lg:text-2xl skill-icon"></i>
                  </span>
                  <span className="skill-name text-muted text-xs hidden md:block">Tailwind</span>
                </div>
                <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2 group">
                  <span className="icon-container w-full flex justify-center">
                    <i className="devicon-nextjs-plain text-foreground group-hover:text-[#000000] transition duration-200 text-2xl lg:text-2xl skill-icon"></i>
                  </span>
                  <span className="skill-name text-muted text-xs hidden md:block">NextJs</span>
                </div>
                <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2 group">
                  <span className="icon-container w-full flex justify-center">
                    <img src="/zustlandIcon.svg" width="25px" alt="zustland icon" className="skill-icon" />
                  </span>
                  <span className="skill-name text-muted text-xs hidden md:block">Zustland</span>
                </div>
                <div className="skill-item shadow-xs flex flex-col items-center gap-3 border rounded-md p-2 group">
                  <span className="icon-container w-full flex justify-center">
                    <i className="devicon-react-plain text-foreground group-hover:text-[#61DAFB] transition duration-200 text-2xl lg:text-2xl skill-icon"></i>
                  </span>
                  <span className="skill-name text-muted text-xs hidden md:block">ReactJs</span>
                </div>


              </div>
            </section>
          </RevealOnScroll>

          <div className="h-px mx-auto my-5 w-[150px] lg:w-full lg:my-10 bg-zinc-200"></div>

          <RevealOnScroll className="space-y-8">
            <section className="expSection flex flex-col gap-10">
              <h1 className="sectionHeader text-xl md:text-2xl font-semibold">Work Experience</h1>
              <div className="sectionContent text-muted space-y-6 md:space-y-8">
                <div className="workItem flex flex-col md:flex-row md:items-center gap-2 md:justify-between">
                  <div className="duration text-[#A1A1AA] text-sm md:text-base w-[300px]">Mar 2025 - Present</div>
                  <div className="work flex items-center flex-1 justify-start gap-2">
                    <p className="text-paragraph">Co-Founder at</p>
                    <Button asChild className="cursor-pointer bg-[#FFF2CD] hover:bg-[#FFF2CD] border border-[#EDCD79] text-[#E18433] hover:shadow-sm">
                      <a href="https://29bytes.com" target="_blank" rel="noopener noreferrer">
                        <LinkIcon /> 29 Bytes
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="workItem flex flex-col md:flex-row md:items-center gap-2 md:justify-between">
                  <div className="duration text-[#A1A1AA] text-sm md:text-base w-[300px]">Oct 2024 - Feb 2025</div>
                  <div className="work flex items-center flex-1 justify-start gap-2">
                    <p className="text-paragraph">Frontend Dev at</p>
                    <Button asChild className="cursor-pointer bg-[#F7EFFF] hover:bg-[#F7EFFF] border border-[#efbfff] text-[#8A429E] hover:shadow-sm">
                      <a href="https://primegurukul.com/" target="_blank" rel="noopener noreferrer">
                        <LinkIcon /> PrimeGurukul
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
          </RevealOnScroll>

          <div id="projects" className="h-px mx-auto my-5 w-[150px] lg:w-full lg:my-10 bg-zinc-200"></div>


          <section className="projectsSection flex flex-col gap-10">
            <RevealOnScroll>
              <h1 className="sectionHeader text-xl md:text-2xl font-semibold capitalize text-center">Here's is what i've been up to.</h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="proj1 p-2 lg:p-5 border border-zinc-200 rounded-md mx-2 lg:mx-5">
                <div className="projImg relative w-[100%] h-[150px] sm:h-[200px] md:h-[250px] border border-zinc-200 lg:h-[335px] rounded-md overflow-hidden">
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

              <div className="proj2 p-2 lg:p-5 border border-zinc-200 rounded-md mx-2 lg:mx-5 mt-5">
                <div className="projImg relative w-[100%] h-[150px] sm:h-[200px] md:h-[250px] border border-zinc-200 lg:h-[335px] rounded-md overflow-hidden">
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

              <div className="viewAll text-left pt-5 mx-2">
                <Button asChild type="button" variant={"ghost"} className='cursor-pointer w-auto'>
                  <Link
                    href="/projects"
                    className='cursor-pointer hover:opacity-80 l-screen-nav-item font-semibold underline'
                  >
                    More Projects <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px mx-auto my-5 w-[150px] lg:w-full lg:my-10 bg-zinc-200"></div>

          <RevealOnScroll className="space-y-8">
            <section className="ContactSection flex flex-col gap-5">
              <h1 className="sectionHeader text-xl md:text-2xl font-semibold">Get in touch</h1>
              <p className="text-muted text-sm lg:text-base">
                Got an idea that needs a sharp frontend and clean design? I turn concepts into slick, functional interfaces that just work. I'm all about building things that feel good and get results. <br />
                Let's build something real — hit me up if you're not here to waste time.
              </p>
              <div className="ctafooter">
                <Button asChild type="button" className="cursor-pointer py-6 w-full md:w-auto px-10 rounded-xl">
                  <a href="mailto:n33raj.kr@gmail.com">
                    <MessageCircle /> Send Message
                  </a>
                </Button>
              </div>
            </section>

            <div className="h-px mx-auto my-5 w-[150px] lg:w-full lg:my-10 bg-zinc-200"></div>


          </RevealOnScroll>
        </div>
      </div>
    </>
  );
}
