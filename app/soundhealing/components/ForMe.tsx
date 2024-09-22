"use client"
import React, { useState, useEffect } from 'react'

const ForMe = ( ) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const benefits = [
    "You want to rest, relax, and show yourself more self-compassion", 
    "You want to feel a deeper connection with your body", 
    "You want to move stuck energy through your body and heal at a cellular level", 
    "You want to move stuck energy through your body", 
    "You have been feeling stuck in life", "You are looking for more clarity", 
    "You’re seeking the perfect balance between body, mind, and spirit", 
    "You want to experience a supportive community of like-minded people through our sound baths", 
  ]
 
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length)
        }, 3000)
    
        return () => clearInterval(intervalId)
      }, [benefits.length])
      
  return (
    <div id="benefits" className='md:mx-14 mx-8'>
        <p className='text-3xl md:text-5xl py-6'>SOUND HEALING IS RIGHT FOR YOU IF...</p>
        <div className='flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center px-2 m-4'>
        {benefits.map((benefit, i) => (
            <li
              key={i}
              className={`item mb-2 text-md md:text-lg  text-black-500 ${currentIndex === i ? 'text-red-800' : ''}`} 
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