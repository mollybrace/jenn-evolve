"use client"
import React, { useState, useEffect } from 'react'

const ForMe = ( {benefits}) => {
    const [current, setCurrent] = useState(0)


    useEffect(() => {
      let interval;
      let timeout;
  
      const startInterval = () => {
        interval = setInterval(() => {
          setCurrent((prevCurrent) => {
            if (prevCurrent + 1 === benefits.length) {
              clearInterval(interval);
              timeout = setTimeout(() => {
                setCurrent(0);
                startInterval();
              }, 1000); // Adjust the delay as needed
              return prevCurrent;
            }
            return prevCurrent + 1;
          });
        }, 2000);
      };
  
      startInterval();
  
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, [benefits.length]);

  return (
    <div id="benefits">
        <p className='text-5xl pt-4 pl-4'>Is sound healing for me?</p>
        <p className='pt-4 pl-4'>Most of us have experienced emotions which have been brought on as a result of music. Maybe you've turned to music to match your emotions - turning to mellow playlists when you’re feeling sad or upbeat playlists when you feel full of energy or want to receive more energy. Maybe you feel a strong connection with certain artists or have created Spotify playlists for certain moods or occasions. And there is a science to this. Listening to music increases the blood flow to brain regions that generate emotions. The limbic system, involved in processing emotions and controlling memory ‘lights up’ when our ears perceive music.    
        </p>
        <p className='pt-4 pl-4'>Music, sound, vibration, frequency is all healing! 

        </p>
        <div className='flex justify-center items-center flex-col'>
        <p className='text-3xl py-6'>Sound healing is right for you if...</p>
        <div className='flex flex-col justify-center px-2'>
        {benefits.map((benefit, i) => (
            <li
              key={i}
              className={`item mb-2 text-sm md:text-2xl  text-slate-500 ${current === i ? 'text-carmine' : ''}`} 
              
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