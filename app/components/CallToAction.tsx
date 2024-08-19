import React from 'react'

const CallToAction = () => {
  return (
     <div className="bg-[url('/backgroundImage2.jpg')] h-[500px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className='absolute inset-0 bg-black opacity-45'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
        <div className=" border-white justify-center text-khaki-beige md:text-4xl text-2xl pb-5 lg:text-5xl">Are You Ready To Embark on Your Evolution Journey with Coaching and Sound Healing?</div>
        <div className='text-sm md:text-md lg:text-xl px-4'>Connect with a supportive community that fosters compassion for cultivating calm, clarity, and confidence. Follow our Instagram for inspiration, updates, and to be part of our transformative community!
        </div>
        <a href="https://www.instagram.com/jenn.evolve/?hl=en">
        <button className='mt-10 p-4 bg- rounded-lg bg-khaki-cream font-bold text-bistre border text-md shadow hover:text-khaki-cream hover:bg-carmine md:text-3lg' type='button'>Join Instagram Community</button></a>
        </div>
            </div>
  )
}

export default CallToAction