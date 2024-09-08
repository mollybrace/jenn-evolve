import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div>
    <div className='text-5xl pl-4 py-5 top-0'>Evolve Coaching</div>
    <div className=' m-12  pl-6 flex flex-col justify-center items-center lg:flex-row'>
      <div className='pl-3 basis-1/2'>
      <div className='flex justify-center text-center'>
        <p className='font-bold'>
          “Whether you think you can or you think you can’t, you’re right” - <span className='italic font-normal text-gray-400'>Henry Ford.</span></p>

      </div>

      <div className='flex justify-center'>
         <Image 
          src='/middle.png'
          alt="filler image"
          height={150}
          width={150}/>
      </div>

      <div>
        <p className='pt-4'>
          Our beliefs underpin every thought we have, every action we take and fuel each emotion we have. They are learned from our upbringing, loved ones and society, created by our past experiences and are thoughts on repeat which, to us, have become fact. But are they?</p>
          <p className='pt-4'>
          On average, we have 6,000 thoughts a day, 80% of them negative and 95% of them repetitive. It’s easy to believe they are fact. Most people don’t choose to disprove their beliefs. In fact, they choose to do the opposite, reinforcing why their beliefs are true and creating a cycle of repeated thoughts, behaviours, experiences and emotions throughout our lives. The tunnel-vision which we have created for ourselves is the stubborn child that prevents us from taking new actions, thoughts, behaviours and keep us stuck, frustrated and unfulfilled.
        </p>
        <p className='pt-4'>
          Have you ever wondered why you keep getting yourself into the same sort of problems over and over again?
        </p>
        <p className='pt-4'>
          Your beliefs are working away in your unconscious mind and we often do not realise the patterns we are creating for ourselves. Our conscious mind makes up only 5% of the brain, while our subconscious mind makes up 95% of the brain. But what if it could all be different?      
        </p>
       </div>
   
      </div>
  
      <div className='basis-1/2  md:items-center justify-center flex'>
         <Image 
            src="/coachingImage3.jpg"
            alt="profile photo"
            width={500}
            height={500} 
            className='py-10 rounded-lg px-6 md:px-20' 
          />

       </div>
    </div>

    <div className='pl-4 m-12'>
      <div className='flex justify-center'>
    <p className='text-5xl pl-4 py-5 top-0'>Why invest in coaching?</p>

      </div>

<p className='pt-4'>
  Mindset coaching is an excellent tool to help us to uncover the subconscious mind and get to know ourselves better.  By unravelling the tangled thoughts in the mind, we can uncover exactly what it is that is keeping us stuck. By challenging our negative belief systems and learning new information about ourselves, we can inspire new thoughts, make new choices, create new behaviours and experiences which lead to creating positive emotions and inspiring new thoughts.
</p>

<p className='pt-4'>
Evolve Coaching is the support system that will support you in bringing more awareness, peace, empowerment, joy, confidence and connection in your life.
</p>
<p className='pt-4'>To dramatically improve the quality of your life, you must think with a new perspective on the world, find what you truly love, live with purpose and drive towards this goal with positive intentions.</p>
<div className='flex justify-center'>
<p className='pt-4 font-bold '>“When you change your thoughts, you change your destiny” - <span className='italic font-normal text-gray-400'>Louise Hay
  </span>
</p>

</div>
<div className='flex justify-center'>
    <Image 
    src='/middle.png'
    alt="filler image"
    height={150}
    width={150}/>
  </div>
<p className='pt-4'>
Are you ready to face your greatest challenge, get to know the three-year-old child that is living inside your unconscious mind and get back in the driving seat of your own life? Check out our coaching sessions below!
</p>

<p className='pt-4'>
Evolve Life Coaching uses a blend of techniques, including Cognitive Behavioural Therapy, Neuro-Linguistic Programming, Time Line Therapy & Hypnotism.

</p>
    </div>
</div>
)
}

export default Intro