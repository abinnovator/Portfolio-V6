import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const StackCircle = ({name,image}: {name: string, image: string}) => {
  return (
    <div className='bg-[rgb(43,43,43)] rounded-full justify-center items-center flex'>
        <Tooltip>
            <TooltipTrigger>
        <div className="p-4"><Image src={image} width={37} height={37} alt={name} className='' /></div>

            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
        </Tooltip>
    </div>
  )
}

export default StackCircle