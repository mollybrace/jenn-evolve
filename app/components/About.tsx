import Image from 'next/image'
import React from 'react'

const About = () => {
    
  return (
      <div className='min-h-500 bg-khaki-cream text-bistre'>
        <h2 className='items-center flex justify-center pb-3 text-5xl pt-6'>Hi, I'm Jenn</h2>

        <div className='flex flex-col justify-center md:flex-row   items-center'>
            <div className='md:w-1/3  flex justify-center items-center'>
                <Image 
                    src="/about.jpg"
                    alt="profile photo"
                    width={400}
                    height={400} 
                    className='py-10 rounded-lg' 
                    />
            </div>

            <div className='py-5 flex flex-col items-center md:w-1/2'>
                <p className='pb-5 text-center'>
                  a compassionate coach specializing in healing the body and the mind by accessing the subconscious with a unique combination of coaching and sound healing. <br></br>With a degree in Psychology, training in ICF, NLP and CBT techniques and as an advanced level sound healing practitioner, I can support you to quieten the inner critic, develop confidence, trust, calm and clarity.
                </p>
                <p className='pb-5 text-center'>Are you ready to level up your life? </p>
                <p>Get in touch for our whole body healing packages.
</p>
                <p><a href='/about' className='hover:cursor underline'>Find out more</a></p>
            </div>
        </div>
    </div>
  )
}

export default About