import React from 'react'

const CallToAction = () => {
  return (
     <div className="bg-[url('/backgroundImage2.JPG')] h-[500px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className='absolute inset-0 bg-black opacity-45'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
        <div className=" border-white justify-center text-khaki-beige md:text-5xl text-4xl pb-5">Want to find out how to live your more authentic self?</div>
        <div className='text-md md:text-xl'>Whether it is Life Coaching, Soundhealing, or joining a community of empowered individuals to work together to live our most powerful lives</div>
        <button className='mt-10 p-4 bg- rounded-lg bg-khaki-cream font-bold text-bistre border text-lg shadow hover:text-khaki-cream hover:bg-carmine md:text-3lg' type='button'><a href="/contact">Join Community</a></button>
        </div>
            </div>
  )
}

export default CallToAction