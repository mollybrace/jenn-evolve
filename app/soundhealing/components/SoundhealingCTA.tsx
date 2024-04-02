import React from 'react'

const SoundhealingCTA = () => {
  return (
    <div className="bg-[url('/soundhealing.jpg')] h-[500px] w-full bg-no-repeat bg-center bg-cover relative">
    <div className='absolute inset-0 bg-black opacity-45'></div>
    <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
    <div className=" border-white justify-center text-khaki-beige md:text-5xl text-4xl pb-5">Relax and unwind to the beautiful sounds of Tibetan Singing bowls </div>
    <div className='text-md md:text-xl'>One-on-one and group sessions available</div>
    <button className='mt-10 p-2 rounded-lg bg-khaki-beige border text-md md:text-lg'>Book Here</button>
    </div>
        </div>
  )
}

export default SoundhealingCTA