import Image from 'next/image'
import React from 'react'

const WhatIsSoundHealing = () => {
  return (
    <div className='m-12' id="mission">
        <div className='flex flex-col justify-center items-center lg:flex-row'>
          <div className='pl-3 basis-1/2'>
        <p className='text-5xl py-5'>WHAT IS SOUNDHEALING?</p>
            <p>Sound Healing is a transformative therapy that harnesses the power of sound, music, and various instruments—including the human voice—to slow down brain waves and guide you into a deeply restorative state. This meditative state, often characterised by theta brain waves, activates the body's natural self-healing mechanisms, promoting a profound sense of well-being and peaceful relaxation.
            </p>
            <p className='pt-4'>Our bodies, composed of 50-75% water, are in constant vibration. Every cell, molecule, tissue, organ, and even the liquid in our bodies vibrates at its own unique frequency. Sound Healing taps into this inherent vibrational nature, with the frequencies from the sounds absorbed by the body, helping restore, recharge, and rejuvenate your cells. This process not only supports physical healing but also fosters mental clarity and emotional balance.
            </p>


           
          </div>
          
        <div className='basis-1/2  md:items-center justify-center flex'>
        <Image 
                    src="/soundhealingImage1.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    layout='responsive'
                    className='py-10 px-6 rounded-xl md:px-20' 
                    />

                    </div>
        </div>
    </div>
  )
}

export default WhatIsSoundHealing