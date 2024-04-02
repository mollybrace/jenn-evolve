import React from 'react'

const CallToAction = () => {
  return (
     <div className="bg-[url('/calltoaction.jpg')] h-[500px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className='absolute inset-0 bg-black opacity-45'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
        <div className=" border-white justify-center text-khaki-beige md:text-5xl text-4xl pb-5">Want to find out how to live your more authentic self?</div>
        <div className='text-md md:text-xl'>Whether it is Life Coaching, Soundhealing, or joining a community of empowered individuals to work together to live our most powerful lives</div>
        <button className='mt-10 p-2 rounded-lg bg-khaki-beige border text-md md:text-lg'>Join Here</button>
        </div>
            </div>
  )
}

export default CallToAction