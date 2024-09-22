"use client"
import React, { useState, useEffect } from 'react'

const CoachingBenefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const benefits = [
    "Discover deep-rooted beliefs that have been keeping you stuck", 
    "Break negative thought patterns and limiting beliefs", 
    "Create new, empowering habits and behaviours", 
    "Experience greater peace, clarity and confidence", 
    "Live with purpose and intention",
  ]
 
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length)
        }, 3000)
    
        return () => clearInterval(intervalId)
      }, [benefits.length])
      
  return (
    <div id="benefits" className='md:mx-14 mx-6'>
        <p className='text-5xl md:text-5xl pt-6'>Benefits</p>
        <p className='py-6'>Evolve Coaching provides the tools to help you shift your mindset and take control of your life. Through our coaching, you will:</p>
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
        <div className='mx-6'>
        <p className='py-6'>With Jenn.Evolve Coaching, we use a blend of powerful techniques to facilitate change, including:</p>
        <li>Cognitive Behavioural Therapy (CBT)</li>
        <li>Neuro-Linguistic Programming (NLP)</li>
        <li>Time Line Therapy</li>
        <li>Hypnotism</li>
        <p className='py-6'>Whether you want to improve your personal or professional life, life coaching offers a transformative experience that will help you reach your full potential.
        </p>

        </div>
    </div>
  )
}

export default CoachingBenefits