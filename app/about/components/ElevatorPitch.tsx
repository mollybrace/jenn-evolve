import Image from 'next/image'
import React from 'react'

const ElevatorPitch = () => {
  return (
        <div className="md:bg-[url('/logo.JPG')] bg-[url('/footer-background.png')] h-[300px] md:h-[320px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className='absolute inset-0 bg-black opacity-45'></div>
        <div className='absolute text-khaki-cream  flex justify-center items-center align-middle  inset-0 flex-col text-center'>
        
      <p className="text-center justify-center align-middle md:text-4xl mx-8 pb-2 text-xl">Coaching & Sound Healing </p>
      <p className="text-center justify-center align-middle md:text-4xl mx-8 text-xl pb-2 pb-2 ">for compassionate souls </p>
      <p className="text-center justify-center align-middle md:text-4xl mx-8 text-xl pb-2 ">sharing love for everyone </p>
      <p className="text-center justify-center align-middle md:text-4xl mx-8 text-xl">except themselves </p>
    </div>
        </div>
              
        
  )
}

export default ElevatorPitch