import React from 'react'
import FAQs from '../soundhealing/components/FAQs'
import Intro from './components/Intro'
import CoachingCTA from './components/coachingCTA'
import SessionsAndFees from './components/SessionsAndFees'
import CoachingInvolve from './components/CoachingInvolve'
import Booking from './components/Booking'


const Coaching = () => {

  const benefits = [
    "Positive Mindset Coaching including: Challenging negative and/or anxious thoughts and triggers, exploring personal values",
    " Cognitive Behavioural Therapy.",
    "Neuro-Linguistic Programming", "Time Line Therapy & Hypnotism"
  ]
  
  const faqItems = [
    {question: "What is Life Coaching?", answer: "Life coaching is a profession that involves helping individuals achieve personal and professional goals. Life coaches work with clients to identify their strengths, set realistic goals, and create actionable plans to reach those goals. They provide support, encouragement, and accountability throughout the process."},
    {question: "Who is it for?", answer: "ife coaching is for anyone looking to improve their personal or professional life."},
    {question: "How can I benefit?", answer: "There are an abundance of benefits and each session is centred around you! Whether you would like to progress in your career, beat procrastination, work through limiting beliefs and gain confidence. I am here to cater to your goals and aspirations."},
    {question: "What to expect in a session", answer: "After our initial free chat, we can have hourly weekly, bi-weekly sessions."},
    {question: "When is it right for me?", answer: "There is not better time in your life to make changes than now!"},
]
  
  return (
    <div>
    <section>
    <Intro/>
  </section>

  <CoachingInvolve benefits={benefits}/>

    <section>
      <Booking />
    </section>
    
    <section>
      <FAQs faqItems={faqItems}/>
    </section>
    <section>
      <CoachingCTA />
    </section>
 
    </div>
  )
}

export default Coaching