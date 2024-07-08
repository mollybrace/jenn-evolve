"use client"
import React, { useState, useEffect } from 'react'

const ForMe = ( {benefits}) => {
    const [current, setCurrent] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prevCurrent) => (prevCurrent + 1) % benefits.length);
        }, 2000);
        return () => clearInterval(interval);
      }, [benefits.length]);

  return (
    <div>
        <p className='text-5xl'>Is sound healing for me?</p>
        <p>Most of us have experienced emotions which have been brought on as a result of music. Maybe you've turned to music to match your emotions - turning to mellow playlists when you’re feeling sad or upbeat playlists when you feel full of energy or want to receive more energy. Maybe you feel a strong connection with certain artists or have created Spotify playlists for certain moods or occasions. And there is a science to this. Listening to music increases the blood flow to brain regions that generate emotions. The limbic system, involved in processing emotions and controlling memory ‘lights up’ when our ears perceive music.    
        </p>
        <p>Music, sound, vibration, frequency is all healing! 

        </p>
        <div className='flex justify-center flex-col'>
        <p className='text-5xl'>Sound healing is right for you if...</p>
        <div className='flex flex-col justify-center pl-12'>
        {benefits.map((benefit, i) => (
            <li
              key={i}
              className={`item mb-2 text-xl  text-slate-500 ${current === i ? 'text-carmine' : ''}`} 
              
            >
              {benefit}
            </li>
          ))}
        </div>
        </div>
    </div>
  )
}

export default ForMe