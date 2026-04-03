"use client"
import Navbar from '@/components/Navbar';
import { PixelGridShader } from '@/components/pixelgrid-shader';

import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"




const AboutPage = () => {

  return (
    /* Use min-h-screen to ensure the black background covers everything */
    <main className="relative bg-black w-full min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelGridShader shape="plasma" colorFg="#0000ff" />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <div className='pt-24'>
            <div className='flex flex-col md:flex-row gap-20 text-white text-center md:text-start'>
                <h1 className='md:border-r-4 md:border-b-0 sm:border-b-4 px-7 md:text-8xl lg:text-9xl text-7xl'>About me!</h1>
                <p className='md:text-4xl text-2xl title'>Hey! I&apos;m Aadit Bhambri. I&apos;mk a 13 year old full stack dev who mainly works with next.js and typescript. I love to making stuff and seeing new tech. I also have some experience with arduinos, raspberry pi&apos;s and esp&apos;s</p>
            </div>
        </div>

        
      </div>
    </main>
  );
}

export default AboutPage