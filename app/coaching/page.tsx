import React from 'react'
import FAQs from '../soundhealing/components/FAQs'
import Intro from './components/Intro'
import CoachingCTA from './components/coachingCTA'


const Coaching = () => {
  
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