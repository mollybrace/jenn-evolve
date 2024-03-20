import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse pt-10'>
        <div className='lg:basis-4/6 md:basis-2/4'>
          <p className='font-bold pb-2'>ABOUT ME</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur hic reiciendis eius, maiores non rem in ipsa veritatis exercitationem dolore porro modi tempora amet. Molestiae iusto consequatur vero itaque!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis voluptatibus cupiditate ea architecto inventore. Harum, nulla in excepturi sequi voluptatem ullam nam ratione ea quo, facilis praesentium porro at!
          </p>
         
    
        </div>
        <div className='md:basis-2/4 lg:basis-2/6'>
        <Image 
          src="/middle.png"
            width={500}
            height={500}
            alt="jenny"
            className='border'
            />
        </div>
      </div>
  )
}

export default AboutMe