import Image from 'next/image'
import React from 'react'

export const Mission = () => {
  return (
    <div>
       <div id="mission" className='flex flex-col md:flex-row mx-6 md:mx-20 pt-6 '>
          <div className='lg:basis-4/6 md:basis-2/4'>
             <p className='font-bold pb-6 text-3xl py-6'>MISSION</p>
            <p className='pb-4'>
               At Jenn.Evolve, it is my mission to empower individuals to transform their lives and make committed change, resulting in inner peace, clarity and confidence. I believe that understanding ourselves - our thoughts, choices, behaviours and emotions - unlocks the potential for profound personal growth. By nurturing both mind and body, I can help you to make better decisions, build confidence, and guide you towards achieving calm, clarity and confidence, so you can live a life filled with greater joy and purpose.
             </p>
             </div>

             <div className='flex md:basis-2/4 lg:basis-2/6  justify-center items-center py-12'>
               <Image 
                 src="/backgroundImage2.jpg"
                 width={400}
                 height={400}
                 alt="jenny"
                 className='rotate-12 rounded-lg z-10'
            />


        </div>
    </div>
  </div>

  )
}


