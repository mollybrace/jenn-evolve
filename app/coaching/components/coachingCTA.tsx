import React from 'react'

const CoachingCTA = () => {
  return (
    <div>
          <div className="bg-[url('/coachingCTA.jpg')] h-[500px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className='absolute inset-0 bg-black opacity-45'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
        <div className=" border-white justify-center text-khaki-beige md:text-5xl text-4xl pb-5 mx-8 lg:mx-12">Are you ready to get back into the driving seat of your own life? 
        </div>
        <div className='text-md md:text-xl mx-4 md:mx-20'>Book your free 30-minute consultation today and take the first step towards a life filled with peace, empowerment, and confidence.
        </div>
    
        <a href="/contact">
        <button className='mt-10 p-4 m-4 text-xl rounded-lg bg-khaki-cream text-bistre border font-bold md:text-lg hover:bg-carmine hover:text-khaki-cream'>Book Here</button></a>
        </div>
            </div>
    </div>
  )
}

export default CoachingCTA