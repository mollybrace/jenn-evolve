import Image from 'next/image'
import React from 'react'

const JourneySoundhealing = () => {
  return (
   <div>
      <div className='flex flex-col md:flex-row'>
        <div className='lg:basis-4/6 md:basis-2/4'>
          <p className='font-bold pb-2 text-3xl pl-4 pt-4'>MY JOURNEY INTO SOUND HEALING</p>
         <div className='px-4'>
    <p className='pb-4'>
    Around the same time as my first life coaching session, my friend asked me if I’d like to come along  to a sound bath. I’d never heard of a sound bath or any form of sound healing before. 
    </p>
    <p className='pb-4'>
    During the session, it didn't take too long before a range of musical instruments soothed me into a far away place. It was quiet there and it felt good to be so still. Being someone that ‘couldn’t meditate’ due to all the tangled thoughts spinning around in my mind, I was shocked beyond belief by this new and magical form of meditation that could support me to unravel the twisted thoughts in my mind and find peace and clarity.

    </p>
    <p className='pb-4'>
    If you’re interested in a blissful meditative experience, while laying on the mat in savasana, then don’t hesitate to get in touch using the contact form, email or via social media links.

    </p>
    

         </div>
        </div>
        <div className='md:basis-2/4 lg:basis-2/6 flex justify-center items-center'>
        <Image 
          src="/healingImage2.JPG"
            width={400}
            height={300}
            alt="jenny"
            className='border rounded-lg rotate-3'
            />
        </div>
      </div>
   </div>
     
  )
}

export default JourneySoundhealing