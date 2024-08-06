import Image from 'next/image'
import React from 'react'

const ElevatorPitch = () => {
  return (
        <div className="md:bg-[url('/logo.JPG')] bg-[url('/footer-background.png')] h-[200px] md:h-[300px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className='absolute inset-0 bg-black opacity-45'></div>
        <div className='absolute text-khaki-cream flex justify-center items-center align-middle  inset-0 flex-col text-center text-xl md:text-3xl lg:text-7xl'>
        
      <p className="md:text-4xl mx-8 pb-2 text-xl">Coaching & Sound Healing </p>
      <p className="md:text-4xl mx-8 pb-2 ">for compassionate souls </p>
      <p className="md:text-4xl mx-8 pb-2 ">sharing love for everyone </p>
      <p className=" md:text-4xl mx-8">except themselves </p>
    </div>
        </div>
              
        
  )
}

export default ElevatorPitch