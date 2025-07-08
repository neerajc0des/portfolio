import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageCircle, CircleDot, Link } from 'lucide-react'

export default function Home() {
  return (
    <div className="mx-auto bg-zinc-50/10 relative">
      <header className="navContainer hidden sm:flex items-center justify-center fixed top-10 z-50  px-4 py-3 w-full">
        <Navbar />
      </header>
      <div className="main-container sm:px-6 lg:px-10 relative max-w-2xl pt-[40px] sm:pt-[130px] md:pt-[150px] lg:pt-[200px] mx-auto flex flex-col justify-center px-4 gap-8">
        <div className="pfp-container w-full pt-5">
          <img src="/pfp.jpg" className="w-24 h-24 rounded-full" alt="avatar" />
        </div>

        <div className="hero-heading flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[1.2]">
            Hey, I'm Neeraj. <br />
            Engineer & Designer.
          </h1>
          <p className="hero-desc text-base lg:text-lg text-paragraph">
            Most designers can't code. Most developers can't design.
            I do both. Turning ideas into products for last 1 year.
          </p>
        </div>

        <div className="cta-container flex gap-5 items-center">
          <Button type="button" className="cursor-pointer py-6 w-auto px-10 rounded-xl"><MessageCircle /> Send Message</Button>
          <Button type="button" variant="default" className="py-5 bg-green-100 text-[#1D6D0B] rounded-full hover:bg-green-200 text-xs md:text-sm"><CircleDot /> Open to opportunities</Button>
        </div>

        <section className="aboutSection flex flex-col gap-5 mt-5 md:mt-10">
          <h1 className="sectionHeader text-xl md:text-2xl font-semibold">About</h1>
          <div className="sectionContent text-muted">
            I'm Neeraj. Software dev based in Delhi, born in Madhya Pradesh.
            Currently pursuing MCA at Delhi University.
            <br /><br />
            I've worked as a frontend developer for 6 months, shipping real-world products and collaborating closely with cross-functional teams. I care about the details — every pixel, every transition, every interaction.
            <br /><br />
            Most developers ignore design. Most designers avoid code. I live in the space between. I believe great UI isn't just about looks — it's about how it feels.
            <br /><br />
            I don't just build interfaces. I craft interfaces that work.
          </div>
        </section>

        <div className="h-px w-full my-5 lg:my-10 bg-zinc-200"></div>

        <section className="expSection flex flex-col gap-5">
          <h1 className="sectionHeader text-xl md:text-2xl font-semibold">Work Experience</h1>
          <div className="sectionContent text-muted space-y-2">
            <div className="workItem flex">
              <div className="duration">Mar 2025 - Present</div>
              <div className="work">
                <p className="text-paragraph">Co-Founder at</p> <Button><Link/></Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
