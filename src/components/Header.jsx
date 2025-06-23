import React from 'react'
import resume from '../assets/misc/Peter_Yoon_Resume_FT.pdf'

const Header = () => {
  return (
    <header className="p-8 border-b border-[#EBF4FF] sticky top-0 bg-white bg-opacity-98 z-100">
        <nav className="flex justify-between items-center">
            <div className="text-3xl text-[#2C5282] font-bold pl-[5%]">
                <a href="/">Peter Yoon</a>
            </div>
            <div className="flex justify-between items-center gap-4 pr-[5%]">
                <a href="#work-experience" className='hover:text-[#4A90E2]'>Experience</a>
                <a href="#projects" className='hover:text-[#4A90E2]'>Projects</a>
                <a href={resume} target="_blank" rel="noopener noreferrer" className='hover:text-[#4A90E2]'>Resume</a>
                <a href="#contact" className='hover:text-[#4A90E2]'>Contact</a>
                <a href="#korean" className='hover:text-[#4A90E2]'>한국어</a>
            </div>
        </nav>
    </header>
  )
}

export default Header
