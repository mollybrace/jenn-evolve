import Image from 'next/image'
import React from 'react'

const About = () => {
    
  return (
      <div className='min-h-500 bg-khaki-beige text-white'>
            <h2 className='font-bold items-center flex justify-center pb-3 text-5xl pt-6'>Who am I?</h2>
        <div className='flex flex-col justify-center md:flex-row  md:justify-center items-center'>
        

            <div className='md:w-1/2 rounded-lg'>
                <Image 
                    src="/about.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='py-10 rounded-lg ' 
                    />
            </div>
            <div className='py-5 flex flex-col items-center md:w-1/2'>
                <p className='pb-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ratione veniam doloribus labore, omnis obcaecati fugit architecto recusandae illo voluptates quasi laudantium error magnam nihil nam, aperiam doloremque ex deleniti.</p>
                <p><a href='/about' className='hover:cursor underline'> Find out more
                    </a>
                    </p>
            </div>
        </div>
    </div>
  )
}

export default About