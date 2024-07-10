"use client"
import React, { useState, useEffect } from 'react'

const CoachingInvolve = ( {benefits}) => {
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
    <div className='flex'>
        
        <div className='flex justify-center items-center flex-col'>
        <p className='text-5xl py-6'>Coaching Involves</p>
        <div className='flex flex-col justify-center border px-2'>
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

export default CoachingInvolve