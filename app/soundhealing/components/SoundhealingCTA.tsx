import React from 'react'

const SoundhealingCTA = () => {
  return (
    <div className="bg-[url('/soundhealing.JPG')] h-[500px] w-full bg-no-repeat bg-center bg-cover relative">
    <div className='absolute inset-0 bg-black opacity-45'></div>
    <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
    <div className=" border-white justify-center text-khaki-beige md:text-5xl text-4xl pb-5">Relax and unwind to the beautiful sound of Tibetan Singing bowls </div>
    <div className='text-md md:text-xl'>One-on-one and group sessions available</div>
    <a href='/contact'>

    <button className='mt-10 p-4 m-4 rounded-lg bg-khaki-cream border text-md text-bistre hover:bg-carmine hover:text-khaki-cream font-bold md:text-lg'>Book Here</button>
    </a>
    </div>
        </div>
  )
}

export default SoundhealingCTA