"use client"
import React, { useEffect, useState } from 'react'
import CCC from './CCC'
import Nav2 from './Nav2'
import { Pacifico } from 'next/font/google'


const pacifico = Pacifico({
  subsets: ['latin'],
 weight: ['400'],
 style: ['normal'],
 variable: '--font-pacifico'
})


const Hero = () => {


  return (
      <div id="hero" className=' bg-[url(/heroImage.jpg)] flex flex-col h-[60vh] md:h-[80vh] bg-[center_top] w-screen bg-cover bg-no-repeat	pt-12 top-0 lg:h-[95vh]'>

        <Nav2 />
        <div className='absolute bottom-[350px] left-7 text-4xl md:text-5xl lg:text-7xl md:bottom-[250px] lg:bottom-[100px] text-carmine bg-slate-100 md:left-10  bg-opacity-50 pt-12'><span className={pacifico.className}>Evolve Coaching & Sound Healing</span>
        <CCC />
        </div>
        </div>
  )
}

export default Hero