"use client"
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import CCC from './CCC'
import Nav2 from './Nav2'
import Image from 'next/image'

const Hero = () => {

  return (
      <div id="hero" className=' bg-[url(/heroImage.jpg)] flex flex-col h-[60vh] md:h-[80vh] bg-[center_top] w-screen bg-cover bg-no-repeat	pt-12 top-0 lg:h-[95vh]'>

        <Nav2 />
        <div className='absolute bottom-[350px] left-7 text-4xl md:text-5xl lg:text-7xl md:bottom-[250px] lg:bottom-[100px] text-khaki-cream md:left-10  bg-opacity-50 border pt-12'>Jenn.Evolve
        <CCC />
        </div>
        </div>
  )
}

export default Hero