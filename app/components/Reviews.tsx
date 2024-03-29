"use client"
import { useEffect, useState } from "react"
import React from 'react'

const Reviews = () => {

    const feedback = [
        {
            id: "feedback-1",
            text: "I have gained a lot from my sessions with Jenn. She has really helped me to shift my mindset by asking me to express my desires and dreams step-by-step, instead of focusing on the situations that I do not want. She has helped me to accept who I am in a gentle manner, rephrasing the questions when necessary. She is nice and patient with me while I consider her thought-provoking questions. I like her very much.",
            name: "Ada",
            country: "Vietnam",
        },
        {
            id: "feedback-2",
            text: "Before coming to see Jen I had never experienced any coaching sessions before. I love the way that Jenn listens, takes notes and investigates my situation step-by-step. I feel like I am being listened to by someone who can understand. I felt nervous before our first sessions began but Jen listened well and it was much easier than I had expected. Thank you for spending time with me and guiding me step-by-step.",
            name: "Valiant",
            country: "Vietnam",
      
        },
        {
            id: "feedback-3",
            text: "My session with Jenn provided me with a valuable insight and perspective with my current situation. Her approach and style helped me to ponder deeper and reflect on how I will apply these realizations and learnings in the future. It was indeed a worthwhile session.",
            name: "Camille",
            country: "Philippines",
        },
        {
          id: "feedback-5",
         text: "Jenn was very open and willing to listen to me. She took proper record of my story and sent a follow email with possible next steps. What I appreciated most was her ability to keep the conversation going and come to certain conclusions that did make sense to me.",
         name: "Catherine",
         country: "Uganda",   
        },
        {
          id: "feedback-6",
            text:"I felt so relaxed and supported by Jenn. It was invaluable to be able to talk to and get a different perspective on my thoughts and feelings. I can now reassess and plan things much more clearly.", 
            name: "Clasina",
            country: "South Africa",
        },
        {
          id: "feedback-7",
            text: "It was so easy to talk with Jenn and so before I knew it, I was having some very profound insights into all of the blockages that were preventing me from fulfilling my full potential.",
            name: "Chris LaVigne",
            country: "Canada",   
        },
        {
            id: "feedback-8",
            text: "Jenny is a wonderful lifecoach. She listens and understands and has really helped me to start reframing some of my thoughts and limiting beliefs.",
            name: "Molly",
            country: "UK"
        }
      
      ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === feedback.length - 1 ? 0 : prevIndex + 1));
      }
  
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === feedback.length - 1 ? 0 : prevIndex - 1));
  
        if (currentIndex === 0) {
          setCurrentIndex(feedback.length - 1)
  
        }
        }
    
  
    useEffect(() => {
      const intervalId = setInterval(nextSlide, 5000);
      return () => clearInterval(intervalId);
    }, [currentIndex])
  
  
  return (
    <div>
      <div className='flex flex-col  items-center text-center'>
      <h2 className='text-3xl md:text-5xl my-5'>What people are saying about me</h2>
    <div className="px-6 m-6 border bg-khaki-cream rounded-lg">
        <p className='text-xl pt-5'>{feedback[currentIndex].text}</p>

        <p className='text-lg pt-5 font-bold'>{feedback[currentIndex].name}</p>

        <p className='text-base pt-2 pb-2 italic'>{feedback[currentIndex].country}</p>
       
    

    </div>
          <div className='flex justify-around pb-5'>
          <button onClick={prevSlide}>previous</button>
          <button onClick={nextSlide}>next</button>
        

          </div>

      </div>
    </div>
  )
}

export default Reviews