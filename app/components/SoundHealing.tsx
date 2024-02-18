import Image from 'next/image'
import React from 'react'

const SoundHealing = () => {
  return (
<section> 
    <div className="max-w-6xl relative px-5 mx-auto mt-10 text-center md:px-1 lg:max-w-full text-khaki-green">
        <h1>Sound Healing</h1>

    <div className="flex flex-col mt-0 md:flex-row md:space-x-6 ">
           <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
            <div className='image-container'>
            <Image 
                src="/backgroundImage.jpg"
                alt="profile photo"
                width={300}
                height={300} 
                className='rounded-100'
            />
            </div>
            
            <h2 className='font-bold'>About Sound Healing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, necessitatibus? Ipsa placeat incidunt optio omnis! </p>
            <a href="/about"><p className='hover:cursor underline'>Find out more</p></a>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
        <div className='image-container'>
            <Image 
                src="/backgroundImage.jpg"
                alt="profile photo"
                width={300}
                height={300} 
                className='rounded-100'
            />
            </div>
            <h2 className='font-bold'>FAQ's</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, necessitatibus? Ipsa placeat incidunt optio omnis!</p>
            <a href="/contact"><p className='underline hover:cursor'>Contact me for more information</p></a>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
            <div className='image-container'>
                <Image 
                    src="/backgroundImage.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='rounded-100'
                />
                </div>
                <h2 className='font-bold'>Book Your Sound Healing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, necessitatibus? Ipsa placeat incidunt optio omnis!</p>
                <a href="/booking"><p className='hover:cursor underline'>Book Your Session</p></a>
        </div>
        </div>
    </div>

</section>  )
}

export default SoundHealing