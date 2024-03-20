import Image from 'next/image'
import React from 'react'

const SoundHealing = () => {
  return (
<section> 
    <div className="max-w-5xl relative px-2 mx-auto mt-10 text-center md:px-0 lg:max-w-full text-khaki-green bg-opacity-50">
    <div className="flex flex-col mt-0 md:flex-row md:space-x-2">
           <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3 border bg-khaki-green bg-opacity-50 text-white">
            <div className='image-container'>
            <Image 
                src="/backgroundImage.jpg"
                alt="profile photo"
                width={300}
                height={300} 
                className='rounded-100'
            />
            </div>
            
            <h2 className='font-bold'>Sound Healing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Accusamus, necessitatibus? Ipsa placeat incidunt optio omnis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati rerum quae adipisci exercitationem temporibus, incidunt quam ab dicta nam omnis repellat placeat. Eaque quo veniam molestiae saepe sed iure autem? </p>
            <a href="/soundhealing"><p className='hover:cursor underline'>Find out more</p></a>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3 border bg-khaki-green text-white bg-opacity-50">
        <div className='image-container'>
            <Image 
                src="/backgroundImage.jpg"
                alt="profile photo"
                width={300}
                height={300} 
                className='rounded-100'
            />
            </div>
            <h2 className='font-bold'>Life Coaching</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Accusamus necessitatibus? Ipsa placeat incidunt optio omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti possimus, sint eos corrupti iste? Nam deserunt nobis sed excepturi, adipisci iure eum ullam saepe dolorem, id, pariatur accusamus doloremque?</p>
            <a href="/coaching"><p className='underline hover:cursor'>Find out more</p></a>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg bg-khaki-green text-white bg-opacity-50 md:w-1/3 border">
            <div className='image-container'>
                <Image 
                    src="/backgroundImage.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='rounded-100'
                />
                </div>
                <h2 className='font-bold'>Booking </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ccusamus, necessitatibus? Ipsa placeat incidunt optio omnis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae sequi est! Doloremque non neque molestias maxime, fuga nostrum autem voluptatum cum dolorum dignissimos! Tempore excepturi quam iusto aspernatur expedita?</p>
                <a href="/booking"><p className='hover:cursor underline'>Book here</p></a>
        </div>
        </div>
    </div>

</section>  )
}

export default SoundHealing