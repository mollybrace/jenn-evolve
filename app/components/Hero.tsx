import React from 'react'
import Nav from './Nav'

const Hero = () => {
  return (
    <div className='h-screen w-screen'>
    <div className="bg-[url('/backgroundImage.jpg')] h-full w-full bg-no-repeat bg-center bg-cover absolute">
          <Nav />
        <div className='absolute bottom-[180px] left-7 text-5xl md:bottom-[175px] md:left-16 md:text-7xl bg-slate-200 bg-opacity-50'>Jenn Evolve
        </div>

        <div className='absolute bottom-[100px] left-7 text-xl md:bottom-[55px] md:left-16 md:text-5xl bg-slate-200 bg-opacity-50'>Supporting <span className='font-extrabold'>YOU</span> on your journey to self compassion
        </div>
        </div>

    </div>
  )
}

export default Hero