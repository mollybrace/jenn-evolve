import React from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ( { faqItems }) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

export default Accordion