"use client"
import React, { useState } from 'react'

const AccordionItem = ( {question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    };


  return (

        <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full px-4 py-2 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-xl font-bold py-2">{question}</span>
        <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
          &#x2B;
        </span>
      </button>
      {isOpen && (
        <div className="p-4">
         <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

export default AccordionItem