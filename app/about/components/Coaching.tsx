import Image from 'next/image'
import React from 'react'

const Coaching = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse pt-6 border mx-6  md:mx-20 rounded-xl bg-khaki-beige my-10'>
        <div className='lg:basis-4/6 md:basis-2/4  mx-8'>
          <p className='font-bold text-3xl pb-2' id="coaching">MY STORY: FROM SELF-DISCOVERY TO COACHING
          </p>
          <div className=' pb-6'>
          <p className='pb-4 pt-4 font-bold underline text-xl'>
            Calm. Clarity. Connectedness.
          </p>
          <p className='pb-4'>
          These three words capture how coaching has transformed my inner world. But it wasn’t always like this.
          </p>
         
          <p className='pb-4'>
          Like many of us, I struggled with anxiety, self-criticism, comparison, and self-sabotage, which impacted my daily life. I often felt like I was just ticking the boxes, counting down the days until my next form of escapism.
          </p>
          <p className='pb-4'>
         In 2019, I realised something had to change. After seven years of teaching in UK primary schools, I was ready for a new adventure. So, I booked a one-way flight to Thailand, determined to fulfil my dream and teach overseas.

          </p>

          <p className='pb-4'>The first few months in Thailand were incredible. I couldn’t have been happier. But soon, the familiar patterns followed me across the other side of the world, and those nagging thoughts and feelings began to creep back in.
</p>

          <p className='pb-4'>Then, in February 2020, the pandemic hit. Stuck indoors, I searched for a distraction from the noise of my mind. That’s when I discovered life coaching.
 </p>
          <p className='pb-4'>Now, five years later, coaching has completely transformed my life. The personal growth I've experienced during this time has exceeded anything I ever learned in school or university. The range of experiences I have had has been broader than I ever imagined, and I’ve gained control over my negative thought patterns, ultimately changing my life for the better.
          </p>
          <p className='pb-4'>
            My commitment to life coaching sessions has heightened my self-awareness, highlighted my unconscious patterns, limiting beliefs and my most aligned values. As a result, I have developed a deeper connection with myself, resulting in greater peacefulness and clarity regarding the outcomes I want to achieve and positively impacting all the relationships around me.

          </p>
          <p className='pb-4'>
            This is the power of coaching—it can transform your inner world, too.

          </p>
          <p className='pb-4'>If you are ready to EVOLVE and cultivate your own inner calm, clarity and confidence, book your <span className='font-bold'>FREE</span> 30-minute consultation using the <span className="underline"><a href="/contact">contact form</a></span>, send me an <span className="underline"><a href="mailto:jenn.evolve333@gmail.com">email</a></span> or DM me via <span className="underline"><a href='https://www.instagram.com/jenn.evolve/?hl=en' target="_blank" >social media</a></span>.
          </p>
        

          </div>
         
    
        </div>
        <div className='md:basis-2/4 lg:basis-2/6 flex justify-center items-center pb-6'>
        <Image 
          src="/coachingImage2.jpg"
            width={350}
            height={350}
            alt="jenny"
            className='rotate-2 rounded-lg'
            />
        </div>
      </div>
  )
}

export default Coaching