import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#262626] py-8 px-6 bg-black mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#7F7F7F] text-sm">
          © 2026 Aadit Bhambri. All rights reserved.
        </p>
        
          <a href="mailto:abtheinnovator@gmail.com"
          className="text-[#0000ff] hover:opacity-70 transition-opacity text-sm font-medium"
        >
          abtheinnovator@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer