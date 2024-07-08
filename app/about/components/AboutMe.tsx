import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse pt-10'>
        <div className='lg:basis-4/6 md:basis-2/4'>
          <p className='font-bold text-3xl pl-4 pb-2' id="coaching">MY JOURNEY INTO COACHING</p>
          <div className='px-4 pb-6'>
          <p className='pb-4 font-bold'>
            Calm. Clarity. Confidence.
          </p>
          <p className='pb-4'>
          This is how coaching has transformed my inner world.
          </p>
          <p className='pb-4 font-bold'>
          Calm. Clarity. Confidence.
          </p>
          <p className='pb-4'>
          But it wasn’t always this way.
          </p>
          <p className='pb-4'>
          In my 20s, I tried to run away from my inner chaos. I was living for the weekends, self-sabotaging, blaming, chasing the next party, holiday or anything else that would allow me to escape.
          </p>

          <p className='pb-4'>I ran away to Thailand with the idea that this would bring me the happiness that I’d been looking for.</p>

          <p className='pb-4'>I ran away to Then COVID-19 hit and we were forced to stay inside.</p>
          <p className='pb-4'>At that point, I could barely do an evening alone and without any plans. I knew that staying inside was going to be tough so I searched online for the perfect distraction from my busy mind: a commitment to learning Thai.</p>
          <p className='pb-4'>A year later, it was my 30th birthday and I had been struggling to come to terms with entering my 30s, fearing the loss of my youth and the pressures of society.</p>
          <p className='pb-4'>By then, I’d learned that my Thai teacher had his own life coaching business. He had offered  me a taster session to try it out and, being someone who is keen  to try new things, I jumped at the chance, although I’d never even heard of life coaching.</p>
          <p className='pb-4'>5 years on and my mind has been opened up, sorted out and de-cluttered. Now, when I am going through personal challenges, I know how to respond in healthy ways, reframe negative thought-patterns and take control of my mind.</p>
          <p className='pb-4'>If you are ready to change your life and bring a sense of calm, clarity and confidence into your life then get it touch by using the contact form, email or social media links.</p>
          

          </div>
         
    
        </div>
        <div className='md:basis-2/4 lg:basis-2/6 flex justify-center items-center pb-6'>
        <Image 
          src="/mission.JPG"
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