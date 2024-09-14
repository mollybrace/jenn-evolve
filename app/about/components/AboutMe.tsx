import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse pt-10 border  mx-12 rounded-xl bg-khaki-beige my-10'>
        <div className='lg:basis-4/6 md:basis-2/4  mx-8'>
          <p className='font-bold text-3xl pl-4 pb-2' id="coaching">MY STORY: FROM SELF-DISCOVERY TO COACHING
          </p>
          <div className='px-4 pb-6'>
          <p className='pb-4 pt-4 font-bold underline text-xl'>
            Calm. Clarity. Confidence.
          </p>
          <p className='pb-4'>
          This is how coaching has transformed my inner world.
          </p>
         
          <p className='pb-4'>
          But it wasn’t always this way.
          </p>
          <p className='pb-4'>
          In my teens and 20s, my mind was a minefield. As a Primary Teacher since 2012, I was an A* perfectionist. I loved my job and I would spend hours of my own time working beyond expectations and suppressing negative emotions. My life was a cycle of anxiety, self-criticism, and self-sabotage.
          </p>

          <p className='pb-4'>After 7 years of teaching, and repeating the same patterns in my personal life, I decided to teach abroad in an International School in Thailand, hoping for a change. Then COVID-19 hit in 2020. Stuck indoors, I sought a distraction from my chaotic mind and discovered life coaching through my Thai teacher, who offered me a free taster session.</p>

          <p className='pb-4'>Five years later, coaching has opened up, sorted out and decluttered my mind. Now, when I am going through personal challenges, I know how to respond in healthy ways, reframe negative thought-patterns and take control of my mind. </p>
          <p className='pb-4'>Coaching has helped me live compassionately, mindfully, and authentically. The constant negative buzz in my mind is now quiet and I can choose what I want to focus on - instead of my mind ruling my body, my body rules my mind.
          </p>
          <p className='pb-4'>Now, I am calm, I have mental clarity and I feel confident. This is how coaching can transform your inner world, too.
</p>
          <p className='pb-4'>If you are ready to evolve and cultivate calm, clarity and confidence, book your <span className='font-bold'>FREE</span> taster session using the <span className="underline"><a href="/contact">contact form</a></span>, send me an <span className="underline"><a href="mailto:jenn.evolve333@gmail.com">email</a></span> or DM me via <span className="underline"><a href='https://www.instagram.com/jenn.evolve/?hl=en' target="_blank" >social media</a></span>.
          </p>
        

          </div>
         
    
        </div>
        <div className='md:basis-2/4 lg:basis-2/6 flex justify-center items-center pb-6'>
        <Image 
          src="/coachingImage2.jpg"
            width={500}
            height={500}
            alt="jenny"
            className='rotate-2 rounded-lg'
            />
        </div>
      </div>
  )
}

export default AboutMe