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
    {question: "What is Life Coaching?", answer: "bla bla bla"},
    {question: "Who is it for?", answer: "bla bla bla"},
    {question: "How can I benefit?", answer: "bla bla bla"},
    {question: "What to expect in a session", answer: "bla bla bla"},
    {question: "When is it right for me?", answer: "bla bla bla"},
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