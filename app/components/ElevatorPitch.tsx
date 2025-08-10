import Image from 'next/image'
import React from 'react'

const ElevatorPitch = () => {
  return (
        <div className="md:bg-[url('/logo.JPG')] bg-[url('/footer-background.png')] h-[100px] md:h-[150px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className='absolute inset-0 bg-black opacity-45'></div>
        <div className='absolute text-khaki-cream flex justify-center items-center align-middle  inset-0 px-4 flex-col text-center text-xl md:text-3xl lg:text-4xl'>
      <p className="">From Chaos to Calm: </p>
      <p className="">Your Space for Mind and Body Empowerment </p>

    </div>
        </div>
              
        
  )
}

export default ElevatorPitch