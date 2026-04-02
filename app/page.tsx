import { GradientBars } from "@/components/gradient-bars";
import { PixelGridShader } from "@/components/pixelgrid-shader";
import TechStackSection from "@/components/TechStackSection";
import { Typewriter } from "@/components/typewriter";
import Work from "@/components/Work";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    /* Use min-h-screen to ensure the black background covers everything */
    <main className="relative bg-black w-full min-h-screen overflow-x-hidden">
      
      {/* 1. BACKGROUND LAYER 
          'fixed' keeps it in the viewport. 
          'z-0' keeps it at the bottom of the stack.
          'pointer-events-none' lets clicks pass through it.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelGridShader shape="plasma" colorFg="#00ff00" />
      </div>

      {/* 2. ALL CONTENT WRAPPER
          We wrap the Hero, TechStack, and Work in ONE relative container.
          This ensures the entire scrollable area is treated as one 'layer' 
          sitting on top of the shader.
      */}
      <div className="relative z-10 w-full">
        
        {/* Navigation & Hero Section */}
        <section className="relative pb-56">
          <div className="flex flex-row justify-between px-12 text-white py-6 font-bold">
            <h1>Aadit Bhambri</h1>
            <nav className="flex flex-row gap-4">
              <Link href={'/about'} className="hover:text-green-400 pointer-events-auto">About</Link>
              <Link href={"/work"} className="hover:text-green-400 pointer-events-auto">Work</Link>
            </nav>
          </div>

          <div className="pt-24">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="font-bold text-white text-9xl border-dashed border-2 p-10 border-[#7F7F7F]">
                AADIT
              </h1>
              <h1 className="font-bold text-9xl text-white">BHAMBRI</h1>
              <p className="text-white font-bold mt-4">
                Crafting experiences not just pieces of software
              </p>
            </div>

            {/* Typewriter Overlay */}
            <div className="hidden md:block">
              <div className="absolute right-28 top-16 text-white">
                <Typewriter words={["Developer", "Designer", "Game Developer"]} cursor={false} />
              </div>
              <div className="absolute right-12 text-white">
                <Typewriter words={["Designer", "Game Developer", "Developer"]} cursor={false} />
              </div>
              <div className="absolute left-28 top-96 text-white flex flex-row">
                <Typewriter words={["Game Developer", "Developer", "Designer"]} cursor={false} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. LOWER SECTIONS 
            We make sure these are also relative and have pointer-events-auto
        */}
        <div className="relative z-20 pointer-events-auto bg-transparent">
          <TechStackSection />
          <Work />
        </div>
        
      </div>
    </main>
  );
}