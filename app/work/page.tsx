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
        <div className="pt-24">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="font-bold text-white text-9xl border-dashed border-2 p-10 border-[#7F7F7F]">
                My Projects!
              </h1>
              <div className="grid grid-cols-3 gap-10 py-20 px-9 ">
                {Projects.map((project) => (
                    <ProjectCard
                    key={project.title}
                    title={project.title}
                    desc={project.desc}
                    image={project.image}
                    id={project.id}
                    />
                ))}
            </div>
            </div>
        </div>

        
      </div>
    </main>
  );
}

export default page