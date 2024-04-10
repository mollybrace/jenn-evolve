import React from 'react'

const CoachingCTA = () => {
  return (
    <div>
          <div className="bg-[url('/soundhealing.JPG')] h-[500px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className='absolute inset-0 bg-black opacity-45'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
        <div className=" border-white justify-center text-khaki-beige md:text-5xl text-4xl pb-5">Take control of your personal and professional life to live your true path</div>
        <div className='text-md md:text-xl'>some sort of tag line here</div>
        <a href="/booking">
        <button className='mt-10 p-2 rounded-lg bg-khaki-beige border text-md md:text-lg'>Book Here</button></a>
        </div>
            </div>
    </div>
  )
}

export default CoachingCTA