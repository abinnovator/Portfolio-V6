import Image from 'next/image'
import React from 'react'
import StackCircle from './StackCircle'

const TechStackSection = () => {
  return (
    <div className='flexx flex-col justify-center items-center bg-black pt-56 text-white'>
        <h1 className='text-4xl font-bold text-center'>What I work with</h1>
        <div className='flex justify-center flex-col items-center pt-10 gap-3'>
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

                {/* React Logo */}
                <div className='bg-[#2B2B2B] rounded-full justify-center items-center flex'>
                    <div className="p-4"><Image src={"/Nextjs.png"} width={37} height={37} alt='Next.js Logo' className='' /></div>
                </div>
            </div>
            {/* Row 3 */}
            <div className='flex flex-row gap-24'>
                {/* Next Logo */}
                <div className='bg-[#2B2B2B] rounded-full justify-center items-center flex'>
                    <div className="p-4"><Image src={"/Nextjs.png"} width={37} height={37} alt='Next.js Logo' className='' /></div>
                </div>
                {/* React Logo */}
                <div className='bg-[#2B2B2B] rounded-full justify-center items-center flex'>
                    <div className="p-4"><Image src={"/Nextjs.png"} width={37} height={37} alt='Next.js Logo' className='' /></div>
                </div>
                {/* Appwrite Logo */}
                <div className='bg-[#2B2B2B] rounded-full justify-center items-center flex'>
                    <div className="p-4"><Image src={"/Nextjs.png"} width={37} height={37} alt='Next.js Logo' className='' /></div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default TechStackSection