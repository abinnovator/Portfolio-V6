import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const ProjectCard = ({img, title, desc}: {img: string, title: string, desc: string}) => {
  return (
    <div className='bg-[#151716] md:rounded-[20px] rounded-4xl text-white'>
        <div className='md:px-6 md:py-6 md:flex md:flex-row md:gap-10 flex flex-col'>
            <Image src={img} alt={title} width={667} height={402} className='rounded-2xl' />
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-7'>
                    <h1 className='md:text-start text-center text-3xl'>{title}</h1>
                    <p>{desc}</p>
                </div>
                <Link href={'/work'} className={cn(buttonVariants({variant: "outline"}), 'text-black')}>See More</Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard