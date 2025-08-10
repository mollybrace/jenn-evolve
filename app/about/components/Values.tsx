import Image from 'next/image'
import React from 'react'

const Values = () => {
  return (
   <div className='w-full'>
        <div className='flex flex-col pb-12 mx-6 md:mx-20'> 
            <p className='font-bold pb-2 text-3xl py-8'>VALUES</p>
           
           <ul className=''>
            <li><span className='font-bold'>Connection:</span> Meaningful connection begins within — by tuning into our own bodies, nurturing self-awareness, and creating intentional moments to pause and check in with ourselves. From this grounded place, we can nurture deeper connections with others, with the moments that matter, and with the natural world around us. </li>
            <div className=' rounded-lg flex justify-center w-full'>
                    <Image 
                    src="/hello.JPG"
                    alt="logo"
                    height={200}
                    width={200}
                    className='m-4 rounded-full flex items-center justify-center h-14 w-14  object-cover text-white z-20'/>
                    </div>
            <li className='pt-4'>
            <span className='font-bold'>Compassion: </span>When we live a life filled with compassion for ourselves, we naturally extend it to others, contributing to a more empathetic and harmonious world.
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
            <span className='font-bold'>Openness:</span>  I believe that embracing openness to new perspectives and experiences is a catalyst for positive change. With a flexible mindset, we attract a life filled with opportunities and abundance, empowering individuals to thrive in every aspect of their journey.

            </li>
            <div className=' rounded-lg flex justify-center w-full'>
                    <Image 
                    src="/hello.JPG"
                    alt="logo"
                    height={200}
                    width={200}
                    className='m-4 rounded-full flex items-center justify-center h-14 w-14  object-cover  text-white z-20'/>
                    </div>

            
             
            
           </ul>

    



      
        </div>

   </div>
     
  )
}

export default Values