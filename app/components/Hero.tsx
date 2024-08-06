"use client"
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import CCC from './CCC'

const Hero = () => {

  return (
    <div className='h-screen w-screen'>
        <Nav />
    <div id="hero" className="bg-[url('/backgroundImage.jpg')] h-full w-full bg-no-repeat bg-center bg-cover absolute z-[-1] top-0">
        <div className='absolute bottom-[40px] left-7 text-4xl lg:text-7xl md:bottom-[400px] text-black md:left-16  bg-opacity-50'>Jenn.Evolve
        <CCC />
        </div>
        <div>

        </div>

        <div className='absolute bottom-[100px] left-7 text-xl md:text-5xl md:bottom-[45px] md:left-16 bg-slate-200 bg-opacity-50'>
        </div>
        </div>

    </div>
  )
}

export default Hero