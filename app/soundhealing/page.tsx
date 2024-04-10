import React from 'react'
import Benefits from './components/Benefits'
import Science from './components/Science'
import WhatIsSoundHealing from './components/WhatIsSoundHealing'
import SoundhealingCTA from './components/SoundhealingCTA'
import FAQs from './components/FAQs'

const SoundHealing = () => {

  const faqItems = [
    {question: "What is sound healing?", answer: "bla bla bla"},
    {question: "What are the benefits?", answer: "bla bla bla"},
    {question: "What to expect during a session?", answer: "bla bla bla"},
    {question: "Are there any precautions", answer: "bla bla bla"},
    {question: "Who can attend a sound healing sesison?", answer: "bla bla bla"},
    {question: "How to prepare for sound healing?", answer: "bla bla bla"},
    {question: "What is sound healing?", answer: "bla bla bla"},
    {question: "What should I do atfer a session?", answer: "bla bla bla"}
]
  return (
    <div> 
      <section>
        <WhatIsSoundHealing />
      </section>
      <section>
        <Benefits />
      </section>

      <section>
        <Science />
      </section>

      <section>
        <FAQs faqItems={faqItems} />
      </section>

      <section>
        <SoundhealingCTA />
      </section>



    </div>

    
  )
}

export default SoundHealing