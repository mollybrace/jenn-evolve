import React from 'react'
import Nav from './Nav'

const Hero = () => {
  return (
    <div className='h-screen w-screen'>
    <div className="bg-[url('/backgroundImage.jpg')] h-full w-full bg-no-repeat bg-center bg-cover absolute z-[-1] top-0">
        <div className='absolute bottom-[180px] left-7 text-7xl md:bottom-[175px] text-white md:left-16 bg-slate-200 bg-opacity-50'>Jenn.Evolve
        </div>

        <div className='absolute bottom-[100px] left-7 text-5xl md:bottom-[45px] md:left-16 bg-slate-200 bg-opacity-50'>Coaching and Sound Healing
        </div>
        </div>

    </div>
  )
}

export default Hero