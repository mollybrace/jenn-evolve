import Image from 'next/image'
import React from 'react'

const WhatIsSoundHealing = () => {
  return (
    <div>
        <div className='text-5xl pl-4 py-5'>What Is SoundHealing?</div>
        <div className='flex flex-col justify-center items-center lg:flex-row'>
          <div className='pl-3 basis-1/2'>
            <p>Sound Healing is a powerful therapy that combines different healing sounds, music, instruments as well as voice to slow down the brainwaves to a restorative state (theta brain waves), which activate the body’s self-healing system, promoting well-being and peaceful relaxation.</p>
            <p className='pt-4'>Every cell, molecule tissue, organ, gland and bone and liquid in our bodies is in constant vibration and has its own state of vibration. Our bodies are made up of on average 60% of water. When we experience sound healing, the frequency (vibrations per second) from the sounds are absorbed by our bodies. During sound healing, our cells vibrate at their optimal frequencies restoring, recharging and rejuvenating the cells.</p>

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

export default WhatIsSoundHealing