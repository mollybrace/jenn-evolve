import Image from 'next/image'
import React from 'react'

const Values = () => {
  return (
   <div className='w-full'>
        <div className='flex flex-col pb-12 mx-6 md:mx-20'> 
            <p className='font-bold pb-2 text-3xl py-8'>VALUES</p>
           
           <ul className=''>
            <li><span className='font-bold'>Openness:</span> I believe that embracing openness to new perspectives and experiences is a catalyst for positive change. By cultivating this mindset, we foster a life filled with opportunities and abundance, empowering individuals to thrive in every aspect of their journey. </li>
            <div className=' rounded-lg flex justify-center w-full'>
                    <Image 
                    src="/hello.JPG"
                    alt="logo"
                    height={200}
                    width={200}
                    className='m-4 rounded-full flex items-center justify-center h-14 w-14  object-cover text-white z-20'/>
                    </div>
            <li className='pt-4'>
            <span className='font-bold'>Empowerment: </span>I empower people of all ages to take control of their lives, make new choices, and embrace fresh thoughts and emotions. Through coaching and sound healing, I help you shift your mindset and build confidence.
            </li>
            <div className=' rounded-lg flex justify-center w-full'>
                    <Image 
                    src="/hello.JPG"
                    alt="logo"
                    height={200}
                    width={200}
                    className='m-4 rounded-full flex items-center justify-center h-14 w-14  object-cover  text-white z-20'/>
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
                    className='m-4 rounded-full flex items-center justify-center h-14 w-14  object-cover  text-white z-20'/>
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
                    className='m-4 rounded-full flex items-center justify-center h-14 w-14  object-cover  text-white z-20'/>
              </div>

            <li className='pt-4'>
              <span className='font-bold'>Compassion:</span> By cultivating compassion for ourselves, we naturally extend it to others, contributing to a more empathetic and harmonious world.
            </li>
         
           </ul>

    



      
        </div>

   </div>
     
  )
}

export default Values