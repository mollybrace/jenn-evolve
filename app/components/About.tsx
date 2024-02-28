import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-500'>
        <div className='flex flex-col justify-center md:flex-row  items-center  bg-khaki-green text-white'>
            <div className='basis-1/2'>
                <Image 
                    src="/about.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='rounded-100 pt-10' 
                />
            </div>

            <div className='basis-1/2 py-5 flex flex-col items-center'>
                <h2 className='font-bold pb-3 text-xl'>Who am I?</h2>
                <p className='pb-5'>Hello my name is Jenny bla bla bla</p>
                <p>Find out more (link)</p>
            </div>
        </div>
    </div>
  )
}

export default About