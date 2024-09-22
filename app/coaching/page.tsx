import React from 'react'
import FAQs from '../soundhealing/components/FAQs'
import Intro from './components/Intro'
import CoachingCTA from './components/coachingCTA'
import Sessions from './components/Sessions'
import CoachingNav from './components/coachingNav'
import CoachingBenefits from './components/CoachingBenefits'


const Coaching = () => {

  
  const faqItems = [
    {question: "How do I know if life coaching is right for me?", answer: "Life coaching is for anyone who is open and ready to make positive changes in their life. It is also for individuals who are feeling stuck, or unfulfilled with any aspect of their life or who are experiencing stress or anxiety. Life coaching is for you if you are someone who values personal growth, development and empowerment. If you want to attract more confidence, clarity and greater compassion for themselves and others . Whether you're dealing with limiting beliefs, lack of direction, or want to achieve a specific goal, life coaching is an invaluable investment."},
    {question: "What can I expect during a session?", answer: "During a session, you can expect Jenn to listen and ask questions which challenge you and help you piece parts of your jigsaw together. We’ll explore your current challenges you may be facing or goals you want to achieve. Together, we’ll uncover limiting beliefs, create actionable strategies, and develop actionable targets to help you move forward."},
    {question: "How long will it take to see results?", answer: "Results vary from person to person. Some clients notice positive changes after just a few sessions, while others benefit from ongoing coaching to support long-term transformation. Personally, the biggest transformations in my own life happened for me when I repeatedly made the commitments to invest in myself. Sessions can be spaced out on a weekly, biweekly or monthly basis. You can put down and pick up coaching as many times as you like and take the tools you have learned with you on your journey."},
    {question: "Am I entitled to a free complimentary consultation?", answer: "After our initial free chat, we can have hourly weekly, bi-weekly sessions."},
    
]
  
  return (
    <div>
      <section>
        <CoachingNav />
      </section>


    <section>
      <Intro/>
    </section>

    <section>
      <CoachingBenefits />
    </section>
    
    <section>
      <Sessions />
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