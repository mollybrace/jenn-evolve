import Image from 'next/image'
import React from 'react'

const JourneySoundhealing = () => {
  return (
   <div>
      <div id="sound-healing" className='flex flex-col md:flex-row mx-6 md:mx-20 bg-khaki-green rounded-xl py-6 mb-6'>
        <div className='lg:basis-4/6 md:basis-2/4 mx-8'>
          <p className='font-bold pb-2 text-3xl py-6'>MY STORY: THE POWER OF SOUND</p>
         <div className=''>
            <p className='pb-4'>
            After moving to Thailand, I first encountered sound healing in 2020. A friend invited me to a sound bath—an experience entirely new to me. During the session, the soothing sounds of various instruments transported me to a serene, peaceful place where I found silence. For someone who struggled with meditation due to a whirlwind of thoughts, and worries, this was a revelation.
          </p>
           <p className='pb-4'>
           Intrigued, I sought out sound healing courses in Bangkok and dedicated the next five years to exploring this practice. While not every session has been as quiet as that first one, I have learned to connect with my body on a deeper level, approaching my experiences with curiosity, compassion and mindfulness. Sound healing proved to be more than just relaxation: it has become a transformative practice that helps me untangle my thoughts and cultivate peace and clarity.
             </p>
             <p className='pb-4'>
             Sound healing has become integral to my path of self-compassion and empowerment, perfectly aligning with my practice of mindfulness. 

           </p>

           <p className='pb-4'>
           If you're curious about experiencing this blissful meditative journey, whether you’re new to sound healing or seeking to deepen your practice, I invite you to reach out via the contact form, email, or social media. 


           </p>
        
        
    </div>
  </div>
        
        <div className='md:basis-2/4 lg:basis-2/6 flex justify-center items-center'>
        <Image 
          src="/healingImage2.jpg"
            width={300}
            height={300}
            alt="jenny"
            className='rounded-lg rotate-3'
            />
        </div>
      </div>
   </div>
     
  )
}

export default JourneySoundhealing