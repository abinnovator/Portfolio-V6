import React from 'react'

const Header = ({title, desc}: {title: string, desc: string}) => {
  return (
    <div>
        <h1 className='text-4xl font-bold text-center text-white'>{title}</h1>
        <p className='text-white font-bold text-center'>{desc}</p>
    </div>
  )
}

export default Header