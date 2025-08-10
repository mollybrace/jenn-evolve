import Image from 'next/image'
import React from 'react'
import Button from './Button'

const SoundHealing = () => {
  return (
<section className='border top-0'> 
    <div className="my-10 mx-4 md:mx-10 text-center">
         <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-20 text-bistre">
            <div className="flex flex-col   items-center p-6 m-6 space-y-6 rounded-lg md:w-1/2 bg-khaki-cream  md:m-0 md:ml-2">
             <div className='image-container'>
                <Image 
                    src="/bowls.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='rounded-100 object-left-bottom'
                />
            </div>
            
            <h2 className='text-4xl md:text-4xl'>Sound Healing</h2>
            <p className='md:text-xl'>Your personal sanctuary for sound healing and therapy. Discover the transformative power of thereapeutic sound with expert-led meditation sessions and sound baths that nurture your well-being and promote deep healing.
            </p>
            <a href="/soundhealing">
                <Button />
            </a>
        </div>

        <div className="flex flex-col md:m-0   items-center p-6 m-6 space-y-6 rounded-lg md:w-1/2 bg-khaki-cream text-bistre">
            <div className='image-container'>
                <Image 
                    src="/lifecoaching.JPG"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='rounded-100'
                />
            </div>
            <h2 className=' text-4xl md:text-4xl'>Life Coaching</h2>
            <p className='md:text-xl'>Begin your journey to personal growth and success with professional life coaching. Together, we can empower you to make positive changes in your life – boosting confidence, overcoming self-doubt, reducing anxiety and promoting inner peace. </p>
            <a href="/coaching">
                <Button />
            </a>
        </div>

        
    </div>
    </div>

</section>  )
}

export default SoundHealing