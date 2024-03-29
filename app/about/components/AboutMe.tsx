import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse pt-10'>
        <div className='lg:basis-4/6 md:basis-2/4'>
          <p className='font-bold pb-2'>MY JOURNEY</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur hic reiciendis eius, maiores non rem in ipsa veritatis exercitationem dolore porro modi tempora amet. Molestiae iusto consequatur vero itaque!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis voluptatibus cupiditate ea architecto inventore. Harum, nulla in excepturi sequi voluptatem ullam nam ratione ea quo, facilis praesentium porro at!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus hic eaque! Quam, nam repudiandae. Laudantium sed distinctio quis, dolore eveniet obcaecati quos eos numquam ea iste perferendis totam quo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis porro magni velit aperiam soluta, placeat enim eum ullam assumenda dignissimos iusto laboriosam temporibus. Nemo dolorum a ab neque obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, omnis quisquam placeat voluptas magnam perspiciatis necessitatibus ut provident sit ipsa quod fugit non, laboriosam ad iure laborum error adipisci facilis.
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