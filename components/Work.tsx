import React from 'react'
import { PixelGridShader } from './pixelgrid-shader'
import Header from './Header'
import ProjectCard from './ProjectCard'

const Work = () => {
  return (
    <div>
        <div className='flex flex-col gap-10'>
            <Header title='My work' desc='A snapshot of my recent work' />
            <div className="px-20 gap-6 flex flex-col">
                <ProjectCard img='/image 1.png' title='Career Path' desc='An ai platform for students to plan tasks, take mock inteviews and take notes. Made with NEXT.JS, REACT, FIREBASE, Vapi' />
                <ProjectCard img='/dustsilver.png' title='Pokemon dustsilver' desc="A faithful recreation of the classic Pokémon experience, built from the ground up in Godot. " />
                <ProjectCard img='/hackai.png' title='Hackai' desc='The project will allow hack clubbers to use the api keys they get from hack club in a free and open source platform!' />


            </div>
        </div>
    </div>
  )
}

export default Work