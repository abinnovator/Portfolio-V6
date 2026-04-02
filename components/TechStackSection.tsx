import Image from 'next/image'
import React from 'react'
import StackCircle from './StackCircle'

const TechStackSection = () => {
  return (
    <div className='flex flex-col justify-center items-center py-56 text-white'>
        <h1 className='text-4xl font-bold text-center'>What I work with</h1>
        <div className='flex justify-center flex-col items-center py-10 gap-3'>
            {/* Row 1 */}
            <div className='flex flex-row gap-24'>
                {/* Next Logo */}
                <StackCircle name='Next.js' image='/Nextjs.png' />
                {/* React Logo */}
                <StackCircle name='React' image='/React1.png' />

                {/* Node */}
                <StackCircle name='Nodejs' image='/Nodejs.png' />

                
            </div>
            {/* Row 2 */}
            <div className='flex flex-row gap-24'>
                {/* Javascript */}
                <StackCircle name='Javascript' image='/JavaScript1.png' />

                {/* Godot */}
                <StackCircle name='Tailwind' image='/Tailwind.png' />

                {/* Typescript Logo */}
                <StackCircle name='Typescript' image='/TypeScript.svg' />

                {/* Godot Logo */}
                <StackCircle name='Godot' image='/GodotEngine.png' />

            </div>
            {/* Row 3 */}
            <div className='flex flex-row gap-24'>
                {/* Next Logo */}
                <StackCircle name='Vite' image='/Vitejs.png' />

                {/* React Logo */}
                <StackCircle name='Python' image='/Python.png' />

                {/* Appwrite Logo */}
                <StackCircle name='Appwrite' image='/Appwrite 1.png' />
                
            </div>
        </div>
        
    </div>
  )
}

export default TechStackSection