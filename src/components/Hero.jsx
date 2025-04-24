import React, { useState, useEffect } from 'react'
import profile from '../assets/img/profile.jpg'

const Hero = () => {
  const roles = ['Software Engineer', 'Musician', 'Athlete'];
  const [currentRole, setCurrentRole] = useState('');

  return (
    <div className="flex h-[90vh] items-center bg-[linear-gradient(135deg,_#F5F9FF_0%,_#fff_100%)] relative overflow-hidden">
        <div className="container mx-auto px-30">
            <div className="hero-content w-[60%]">
            <h1 className="text-5xl font-bold text-[#222222] mb-6">Software @ SAP</h1>
            <p className="text-xl text-[#4A90E2] mb-8">Passionate about solving problems using data</p>
            <p className="pb-8">Hi! My name is Peter, and I'm currently a Software Engineer Intern at SAP.</p>
            <a href="#projects" className="cta-button inline-block bg-[#2C5282] text-white py-3 px-8 rounded-md font-semibold transition-colors duration-300 hover:bg-[#1A365D]">
                Currently WIP!
            </a>
            </div>
            <div className="hero-image absolute right-10 top-1/2 transform -translate-y-1/2 w-72 h-72 rounded-full border-4 border-[#4A90E2] bg-[#EBF4FF] flex items-center justify-center text-[#2C5282] text-2xl">
                <img src={profile} alt="Profile Photo" className="w-full h-full object-cover rounded-full"/>
            </div>
        </div>
    </div>
  )
}

export default Hero
