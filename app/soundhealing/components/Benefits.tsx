"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const slides = [
  {statement: "Manage Stress", image: "/left.png", alt: "left"},
  {statement: "Improve Lleep", image: "/right.png", alt: "right"},
  {statement: "Increase Mindfulness", image: "/left.png", alt: "middle"},
  {statement: "Boost Immune Function", image: "/middle.png", alt: "left2"},
  {statement: "Enhance Energy", image: "/right.png", alt: "left2"},
  {statement: "Spirital Connection", image: "/right.png", alt: "left2"},
  {statement: "Improved Concentration and Focus", image: "/right.png", alt: "left2"},
  {statement: "Promotion of Physical Healing", image: "/right.png", alt: "left2"},
  {statement: "Enhance Energy", image: "/right.png", alt: "left2"},
]

const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex - 1));

      if (currentIndex === 0) {
        setCurrentIndex(slides.length - 1)

      }
      }
  

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex])



  return (
    <div>
      <div className='flex flex-col  items-center'>
      <h2 className='text-3xl md:text-5xl my-5'>Benefits of Soundhealing</h2>

        <p className='text-2xl pt-5'>{slides[currentIndex].statement}</p>

        <Image 
          src={slides[currentIndex].image}
            width={1000}
            height={1000}
            alt={slides[currentIndex].alt}
            />
    
          <div className='flex justify-around'>
          <button onClick={prevSlide}>previous</button>
          <button onClick={nextSlide}>next</button>
        

          </div>

      </div>
    </div>
  )

    }
export default Benefits