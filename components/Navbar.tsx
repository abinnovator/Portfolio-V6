import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
     <div className="flex flex-row justify-between px-12 text-white py-6 font-bold">
        <Link href={'/'}><h1>Aadit Bhambri</h1></Link>
        <nav className="flex flex-row gap-4">
            <Link href={'/about'} className="hover:text-[#0000ff] pointer-events-auto">About</Link>
            <Link href={"/work"} className="hover:text-[#0000ff] pointer-events-auto">Work</Link>

        </nav>
    </div>
  )
}

export default Navbar