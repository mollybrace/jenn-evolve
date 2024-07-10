"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



const slides = [
  {statement: "Promotes overall wellbeing", image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' fill='currentColor' class='bi bi-1-circle' viewBox='0 0 16 16'%3E%3Cpath d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z'/%3E%3C/svg%3E", alt: "one"},
  {statement: "Reduces stress and anxiety", image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-2-circle' viewBox='0 0 16 16'%3E%3Cpath d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306'/%3E%3C/svg%3E", alt: "two"},
  {statement: "Deep relaxation", image:
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-3-circle' viewBox='0 0 16 16'%3E%3Cpath d='M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318'/%3E%3Cpath d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8'/%3E%3C/svg%3E", alt: "three"},


  {statement: "Improves sleep", image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-4-circle' viewBox='0 0 16 16'%3E%3Cpath d='M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218'/%3E%3Cpath d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8'/%3E%3C/svg%3E"
  , alt: "four"},
  {statement: "Enhance Energy", image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-5-circle' viewBox='0 0 16 16'%3E%3Cpath d='M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z'/%3E%3C/svg%3E"
  , alt: "five"},
  {statement: "Encourages body's natural healing responses", image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-6-circle' viewBox='0 0 16 16'%3E%3Cpath d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.21 3.855c1.612 0 2.515.99 2.573 1.899H9.494c-.1-.358-.51-.815-1.312-.815-1.078 0-1.817 1.09-1.805 3.036h.082c.229-.545.855-1.155 1.98-1.155 1.254 0 2.508.88 2.508 2.555 0 1.77-1.218 2.783-2.847 2.783-.932 0-1.84-.328-2.409-1.254-.369-.603-.597-1.459-.597-2.642 0-3.012 1.248-4.407 3.117-4.407Zm-.099 4.008c-.92 0-1.564.65-1.564 1.576 0 1.032.703 1.635 1.558 1.635.868 0 1.553-.533 1.553-1.629 0-1.06-.744-1.582-1.547-1.582'/%3E%3C/svg%3E"
  , alt: "six"},
  {statement: "Increases blood flow and circulation around the body", image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-7-circle' viewBox='0 0 16 16'%3E%3Cpath d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z'/%3E%3C/svg%3E"
  , alt: "seven"},
  {statement: "Boosts the immune system", image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-8-circle' viewBox='0 0 16 16'%3E%3Cpath d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.03 1.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424'/%3E%3C/svg%3E", alt: "eight"},
  {statement: "Creates a more harmonious flow within the systems of the body", image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-9-circle' viewBox='0 0 16 16'%3E%3Cpath d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.223 4.146c-1.593 0-2.425-.89-2.52-1.798h1.296c.1.357.539.72 1.248.72 1.36 0 1.88-1.353 1.834-3.023h-.076c-.235.627-.873 1.184-1.934 1.184-1.395 0-2.566-.961-2.566-2.666 0-1.711 1.242-2.731 2.87-2.731 1.512 0 2.971.867 2.971 4.014 0 2.836-1.02 4.3-3.123 4.3m.118-3.972c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z'/%3E%3C/svg%3E", alt: "nine"},
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
    <div className='flex justify-center'>
      <div className='flex items-center align-middle flex-col bg-khaki-cream text-bistre w-full md:w-2/3 lg:w-1/2  md:rounded-lg '>
      <h2 className='text-3xl md:text-5xl my-5'>Benefits</h2>
      <div className='flex align-middle justify-around text-center basis-1/3 flex-col '>
        <div className='flex items-center justify-center md:pl-10'>
        <Image 
          src={slides[currentIndex].image}
            width={150}
            height={150}
            alt={slides[currentIndex].alt}
            className='flex justify-center items-center transition-transform duration-500 ease-in-out'
            />

        </div>
        <p className='text-2xl md:text-4xl py-6  flex items-center justify-center align-middle md:basis-2/3'>{slides[currentIndex].statement}</p>

      </div>

    
          <div className='flex justify-around py-4'>
          <button onClick={prevSlide}>
            <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
            </svg>
          </button>

          <button onClick={nextSlide}> 
            <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
            </svg>
          </button>
        

          </div>

      </div>
    </div>
  )

    }
export default Benefits