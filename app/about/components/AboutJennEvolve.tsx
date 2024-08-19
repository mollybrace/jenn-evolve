import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
   <div>
      <div className='flex flex-col md:flex-row'>
        <div className='bg-khaki-cream lg:basis-4/6 md:basis-2/4'>
          <p className='font-bold pb-2 text-3xl pl-4 pt-4'>MISSION & VALUES</p>
         <div className='px-4 z-0'>
    <p className='pb-4'>
      At Jenn.Evolve, we know that as children we were taught to be kind to others. It comes easy to us. We are naturals at this. We have empathy for others, yet not for ourselves.
    </p>
    <p className='pb-4'>
      If we learn how to understand ourselves and our behaviours, then we can learn to make peace with every part of ourselves and trust our intuitions.
    </p>
    <p className='pb-4'>
      It’s time for an evolution. An evolution of the mind. To bring greater JOY in all areas of life.
    </p>
    <p className='pb-4'>
      Combining positive mindset coaching & sound healing, it is Jenn’s vision that all of us, children to adults, learn the skills of self-compassion: to quieten the inner critic, to shut out the noise and expectations of the outside world, to speak your truth, build knowing confidence, interrupt repeating patterns, live mindfully and listen to gut feelings.
    </p>
    <p className='pb-4'>
    Through a combination of coaching and sound healing, we can work with the subconscious mind reframing limiting beliefs, training the brain to create new neural pathways to focus on abundance and opportunities. With a greater understanding of ourselves and our values, we can live life from a place of authentic passion and purpose, giving you a greater sense of freedom and joy.
    </p>
    <p className='pb-4'>
    If everyone were to live their lives from a place of compassion for self and others, what a better world we would live in today!
    </p>

         </div>
        </div>
        <div className=' bg-khaki-cream md:basis-2/4 lg:basis-2/6 flex justify-center items-center pt-6'>
        <Image 
          src="/backgroundImage2.jpg"
            width={500}
            height={500}
            alt="jenny"
            className='border rotate-12 rounded-lg z-10'
            />
        </div>
      </div>
   </div>
     
  )
}

export default AboutMe