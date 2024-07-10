import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div>
    <div className='text-5xl pl-4 py-5 top-0'>Evolve Mindset Coaching?</div>
    <div className='flex flex-col justify-center items-center lg:flex-row'>
      <div className='pl-3 basis-1/2'>
        <p>
          “Whether you think you can or you think you can’t, you’re right” - Henry Ford.</p>
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

        <p className='pt-4'>
          Mindset coaching is an excellent tool to help us to uncover the subconscious mind and get to know ourselves better.  By unravelling the tangled thoughts in the mind, we can uncover exactly what it is that is keeping us stuck in our life. By challenging our negative belief systems and learning new information about ourselves, we can inspire new thoughts, make new choices, create new behaviours and experiences which lead to creating positive emotions and inspiring new thoughts.
        </p>

        <p className='pt-4'>
           Evolve Coaching is the support system that you need to make fast progress towards positive changes in your life, feel happier, challenge your belief systems and transform your life beyond limitations. To dramatically improve the quality of your life, you must think with a new perspective on the world, find what you truly love and live with purpose and drive towards this goal with positive intentions.

        </p>
        <p className='pt-4'>
        To improve the quality of your life, Evolve Coaching can support you in reframing the beliefs that are keeping you stuck, creating helpful mantras to live by and facilitating new words of compassion for yourself. The most important words we should listen to are the ones that we say about ourselves. There is no competition with others, only the competition we have with our former self and progress towards our life of purpose, which are aligned with our values. When we can make choices which align with our values then we can feel completely empowered and in control of our life.

        </p>

        <p className='pt-4'>
        “When you change your thoughts, you change your destiny” - Louise Hay
        </p>

        <p className='pt-4'>
          Are you ready to face your greatest challenge, get to know the three-year-old child that is living inside your unconscious mind and get back in the driving seat of your own life? Check out our coaching sessions below!

        </p>

      </div>
    <div className='basis-1/2  md:items-center justify-center flex border'>
    <Image 
                src="/soundhealing.JPG"
                alt="profile photo"
                width={400}
                height={400} 
                layout='responsive'
                className='py-10 px-6 md:px-20' 
                />

                </div>
    </div>
</div>
)
}

export default Intro