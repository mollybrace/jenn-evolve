import React from 'react'
import Accordion from './Accordion'



const FAQs = ( {faqItems} ) => {
  return (
    <div id="faq" className='w-full pt-5 pb-14 bg-carmine text-khaki-cream'>
        <h2 className='pl-6 text-5xl pb-4'>FAQ's</h2>
        <Accordion faqItems={faqItems} />
    </div>
  )
}

export default FAQs