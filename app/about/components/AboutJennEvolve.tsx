import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
   <div className='mr-0'>
      <div className='rounded-2xl mx-12 border bg-khaki-cream'>
        <div className='flex flex-col lg:flex-row mx-8 pb-12'>
        <div className='lg:basis-4/6 md:basis-2/4'>
          <p className='font-bold pb-2 text-3xl pl-4 pt-4'>MISSION</p>
         <div className='px-4 z-0'>
            <p className='pb-4'>
            At Jenn.Evolve, it is my mission to empower individuals to transform their lives and make committed change, resulting in inner peace, clarity and confidence. I believe that understanding ourselves - our thoughts, choices, behaviours and emotions - unlocks the potential for profound personal growth. By nurturing both mind and body, I can help you to make better decisions, build confidence, and guide you towards achieving calm, clarity and confidence, so you can live a life filled with greater joy and purpose.
            </p>
            
            <p className='font-bold pb-2 text-3xl py-4'>VALUES</p>
           
           <ul className=''>
            <li><span className='font-bold'>Openness:</span> I believe that embracing openness to new perspectives and experiences is a catalyst for positive change. By cultivating this mindset, we foster a life filled with opportunities and abundance, empowering individuals to thrive in every aspect of their journey. </li>
            <div className=' rounded-lg flex justify-center w-full'>
                    <Image 
                    src="/hello.JPG"
                    alt="logo"
                    height={200}
                    width={200}
                    className='m-4 rounded-full flex items-center justify-center h-10 w-10  object-cover shadow-md  text-white z-20'/>
                    </div>
            <li className='pt-4'>
            <span className='font-bold'>Empowerment:</span>I empower people of all ages to take control of their lives, make new choices, and embrace fresh thoughts and emotions. Through coaching and sound healing, I help you shift your mindset and build confidence.
            </li>
            <div className=' rounded-lg flex justify-center w-full'>
                    <Image 
                    src="/hello.JPG"
                    alt="logo"
                    height={200}
                    width={200}
                    className='m-4 rounded-full flex items-center justify-center h-10 w-10  object-cover shadow-md  text-white z-20'/>
                    </div>

            <li className='pt-4'>
            <span className='font-bold'>Growth:</span> I believe self-respect and discipline are vital for personal growth. My goal is to help individuals uncover their core values, align their goals with them, and take actions that reflect these values, leading to continual personal development. In doing so, we learn to trust our intuition and live a purposeful, authentic life.

            </li>
            <div className=' rounded-lg flex justify-center w-full'>
                    <Image 
                    src="/hello.JPG"
                    alt="logo"
                    height={200}
                    width={200}
                    className='m-4 rounded-full flex items-center justify-center h-10 w-10  object-cover shadow-md  text-white z-20'/>
                    </div>

            <li className='pt-4'>
              <span className='font-bold'>Mindfulness:</span> Living mindfully and being present in each moment helps us cultivate mental clarity, break free from limiting beliefs and repetitive patterns, and foster a calm inner world, allowing for a deeper connection with our true selves.
            </li>
              <div className=' rounded-lg flex justify-center w-full'>
                    <Image 
                    src="/hello.JPG"
                    alt="logo"
                    height={200}
                    width={200}
                    className='m-4 rounded-full flex items-center justify-center h-10 w-10  object-cover shadow-md  text-white z-20'/>
              </div>

            <li className='pt-4'>
              <span className='font-bold'>Compassion:</span> By cultivating compassion for ourselves, we naturally extend it to others, contributing to a more empathetic and harmonious world.
            </li>
         
           </ul>

         </div>
      </div>


       <div className=' bg-khaki-cream md:basis-2/4 lg:basis-2/6 flex justify-center items-center py-12'>
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
   </div>
     
  )
}

export default AboutMe