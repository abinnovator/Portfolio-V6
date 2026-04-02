import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const ProjectCard = ({img, title, desc}: {img: string, title: string, desc: string}) => {
  return (
    <div className='bg-[#151716] rounded-[20px] text-white'>
        <div className='px-6 py-6 flex flex-row gap-10'>
            <Image src={img} alt={title} width={667} height={402} />
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-7'>
                    <h1 className='text-3xl'>{title}</h1>
                    <p>{desc}</p>
                </div>
                <Link href={'/projects'} className={cn(buttonVariants({variant: "outline"}), 'text-black')}>See More</Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard