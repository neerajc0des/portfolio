import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto bg-zinc-50/10 relative">
      <header className="navContainer hidden sm:flex items-center justify-center fixed top-10 z-50  px-4 py-3 w-full">
        <Navbar />
      </header>
      <div className="main-container sm:px-6 lg:px-8 relative max-w-2xl pt-[40px] sm:pt-[130px] md:pt-[150px] lg:pt-[188px] mx-auto flex flex-col justify-center px-4 gap-8">
        <div className="pfp-container w-full">
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
      </div>
    </div>
  );
}
