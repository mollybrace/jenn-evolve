"use client"
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import CCC from './CCC'
import Nav2 from './Nav2'
import Image from 'next/image'

const Hero = () => {

  return (
      <div id="hero" className='bg-[url(/heroImage.jpg)] flex flex-col h-[60vh] md:h-[80vh] bg-center w-screen bg-cover bg-no-repeat	pt-12 top-0'>

        <Nav2 />
        <div className='absolute bottom-[350px] left-7 text-4xl md:text-5xl lg:text-7xl md:bottom-[1000px] lg:bottom-[800px] text-khaki-cream md:left-10  bg-opacity-50 pt-12'>Jenn.Evolve
        <CCC />
        </div>
        </div>
  )
}

export default Hero