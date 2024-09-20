import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div className='m-8'>
    <div className='text-5xl pb-4 mx-8'>What is life coaching?</div>
    <div className='  pl-6 flex flex-col justify-center items-center lg:flex-row'>
      <div className='pl-3 basis-1/2'>
      

      <div>
        <p className='pt-4'>
        Life coaching is a transformative process that helps you bridge the gap between where you are now and where you want to be. It focuses on identifying and overcoming limiting beliefs, breaking negative thought patterns, and creating empowering habits that lead to meaningful change in your life.

        </p>
          <p className='pt-4'>
          Life coaching will support you in gaining a greater self-awareness, clarity on your goals, and strategies to support you in taking action towards change resulting in greater joy, confidence and connection. It’s a powerful tool for personal growth and development, helping you move past the obstacles in your mind and take control of your future.

        </p>
        <p className='pt-4'>
        To dramatically improve the quality of your life, you must think with a new perspective on the world, find what you truly love, live with purpose and drive towards this goal with positive intentions.

        </p>
      
       </div>
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

    <div className='m-12'>
      <div className='flex justify-center'>
    <p className='text-5xl  py-5 top-0'>Why invest in coaching?</p>
      </div>
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

<p className='pt-4'>
Have you ever wondered why the same problems keep appearing in your life? This is because 95% of our mind operates subconsciously, running on autopilot. Through life coaching, you’ll learn to rewrite those subconscious beliefs, bring them to the surface and shift your mindset to create a life of purpose and joy.

</p>

<p className='pt-4'>
Our beliefs shape every thought we have, every action we take, and every emotion we feel. Most of these beliefs come from our upbringing, loved ones, society, and our past experiences. They’re repeated so often that they become our “truth,” even though they may be holding us back.

</p>
<p className='pt-4'>On average, we experience 6,000 thoughts a day—80% of them negative and 95% repetitive. This can lead to tunnel vision, keeping us stuck in frustrating patterns, unable to break free like a stubborn child that keeps us stuck, frustrated and unfulfilled. It is difficult to disprove your beliefs without the support of a professional, since we can become stuck in a cycle of repeated thoughts, behaviours, experiences and emotions due to our brain's neural pathways.
</p>

<p className='pt-4'>
Life coaching gives you the tools to challenge those limiting beliefs, create new thought patterns, and take control of your life. Life coaching is a valuable investment in yourself and your future.

</p>
    </div>
</div>
)
}

export default Intro