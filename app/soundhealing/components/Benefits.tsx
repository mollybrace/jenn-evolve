"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const slides = [
  {statement: "Calm your mind", image: "/left.png", alt: "left"},
  {statement: "Have a great time", image: "/right.png", alt: "right"},
  {statement: "Grow wings", image: "/left.png", alt: "middle"},
  {statement: "See the future", image: "/middle.png", alt: "left2"},
  {statement: "Be young and wild and freee", image: "/right.png", alt: "left2"},
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