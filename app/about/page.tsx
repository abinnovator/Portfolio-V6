import Navbar from '@/components/Navbar';
import { PixelGridShader } from '@/components/pixelgrid-shader';
import ProjectCard from '@/components/SmallProjectCard';
import { Projects } from '@/constants';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    /* Use min-h-screen to ensure the black background covers everything */
    <main className="relative bg-black w-full min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelGridShader shape="plasma" colorFg="#00ff00" />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <div className='pt-24'>
            <div className='flex flex-col md:flex-row gap-20 text-white text-center md:text-start'>
                <h1 className='md:border-r-4 md:border-b-0 sm:border-b-4 px-7 md:text-8xl lg:text-9xl text-7xl'>About me!</h1>
                <p className='md:text-4xl text-2xl'>Hey! I&apos;m Aadit Bhambri. I&apos;mk a 13 year old full stack dev who mainly works with next.js and typescript. I love to making stuff and seeing new tech. I also have some experience with arduinos, raspberry pi&apos;s and esp&apos;s</p>
            </div>
        </div>

        
      </div>
    </main>
  );
}

export default page