
"use client"
import HorizontalScroll from "@/components/HorizontalScroll";
import { PixelGridShader } from "@/components/pixelgrid-shader";
import TechStackSection from "@/components/TechStackSection";
import Work from "@/components/Work";
import { motion } from "motion/react";
import Hero from "@/components/Hero";





export default function Home() {
  

  return (
    /* Use min-h-screen to ensure the black background covers everything */
    <main className="relative bg-black w-full min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelGridShader shape="plasma" colorFg="#0000ff" />
      </div>

      <motion.div className="relative z-10 w-full">
        
        {/* Navigation & Hero Section */}
        <Hero />

        <div className="relative z-20 pointer-events-auto bg-transparent">
          <HorizontalScroll />
          <TechStackSection />
          <Work />

        </div>
        
      </motion.div>
    </main>
  );
}