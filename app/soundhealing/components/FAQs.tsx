import React from 'react'
import Accordion from './Accordion'

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

const FAQs = () => {
  return (
    <div className='w-full pt-5 pb-14 bg-carmine text-khaki-cream'>
        <h2 className='pl-6 text-5xl'>FAQ's</h2>
        <Accordion faqItems={faqItems} />
    </div>
  )
}

export default FAQs