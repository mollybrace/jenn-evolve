import Image from 'next/image'
import React from 'react'
import Button from './Button'

const About = () => {
    
  return (
      <div className='bg-khaki-cream text-bistre'>
        <div className='mx-12 md:mx-20'>
        <h2 className='items-center flex justify-center pb-3 text-5xl pt-6'>Hi I'm Jenn,</h2>

        <div className='flex flex-col justify-center md:flex-row   items-center'>
            <div className='md:w-1/3  justify-center items-center'>
                <Image 
                    src="/jenn.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='rounded-xl mb-6' 
                    />
            </div>

            <div className='py-5 flex flex-col items-center md:w-2/3 text-center md:text-lg  w-full'>
                <p className='pb-5 '>
                I’m a compassionate life coach and sound healing practitioner specializing in nurturing both mind and body through a unique blend of coaching and sound therapy. My approach is grounded in a degree in Psychology and further enriched by extensive training in life coaching practices, including NLP, CBT, ICF and Timeline Therapy alongside advanced sound healing practices.
                </p>
                  <p className='pb-5'>
                  I am here to help you quiet the inner critic, build confidence, and cultivate calm, clarity and confidence. Whether you’re looking to overcome self-doubt, reduce anxiety, or achieve inner peace, my holistic approach supports your personal growth every step of the way.

                </p>
                <p className='pb-5 text-center'>Are you ready to transform your life and embrace a new level of well-being? Get in touch to explore our comprehensive whole-body healing packages.  </p>
                
              <a href='/about' >
                <Button />
              </a>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default About