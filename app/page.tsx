import { GradientBars } from "@/components/gradient-bars";
import Navbar from "@/components/Navbar";
import { PixelGridShader } from "@/components/pixelgrid-shader";
import TechStackSection from "@/components/TechStackSection";
import { Typewriter } from "@/components/typewriter";
import Work from "@/components/Work";




export default function Home() {
  return (
    /* Use min-h-screen to ensure the black background covers everything */
    <main className="relative bg-black w-full min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelGridShader shape="plasma" colorFg="#00ff00" />
      </div>

      <div className="relative z-10 w-full">
        
        {/* Navigation & Hero Section */}
        <section className="relative pb-56">
          <Navbar />

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

        <div className="relative z-20 pointer-events-auto bg-transparent">
          <TechStackSection />
          <Work />

        </div>
        
      </div>
    </main>
  );
}