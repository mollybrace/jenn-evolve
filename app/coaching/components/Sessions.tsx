import React from 'react'
import SessionCard from './SessionCard'

const Sessions = () => {
    const facts = [
        {fact: "Clarity",
        type: "1 hour of coaching",
        information: "Gain quick, actionable insights to overcome obstacles and move forward with confidence.",
        message: "Hi! I would like to enquire about a Chakra Balancing session..."},
        {fact: "Growth",
        type: "6 hours of coaching", 
        information: "Break through limiting beliefs and take steps towards positive change and transformation.",
        message: "Hi! I would like to enquire about a brain wave entrainment session..."},
        {fact: "Evolve",
        type: "20 hours of coaching",
         information: "Long-term support for deep transformation, clarity and personal growth",
         message: "Hi! I would like to enquire about a sound and vibration massage..."},
        {fact: "Clarity & Sound", 
        type: "1 hour of coaching & 1 hour of Sound Healing",
        information: "1 hour of coaching & 1 hour of Sound Healing.",
        message: "Hi! I would like to enquire about a warm water therapy session..."},
        {fact: "Growth & Sound", 
        type: "", 
        information: "6 hours of coaching & 6 hours of Sound Healing",
        message: "Hi! I would like to enquire about a sound bath meditation session..."},
        {fact: "Evolve & Sound",  
        type: "",
        information: "20 hours of coaching & 20 hours of Sound Healing",
        message: "Hi! I would like to enquire about a chakra awareness meditation session..."}
    
      ]
  return (
    <div id="sessions" className=" text-bistre relative">
    <div className='flex flex-col items-center '>
     <h2 className="text-5xl md:text-5xl pt-4">SESSIONS</h2>
   </div>
   <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6'>
    
     {facts.map((fact) => (
       <a href={`https://wa.me/447522594981?text=${fact.message}`} target='_blank'>
       <SessionCard fact={fact} />
       </a>
     ))}
 
   </div>

   <div className='m-8'>
        <p className=''>At Jenn.Evolve, two types of coaching sessions are offered:
        </p>
        <div>
        <ul>
          <li>One-to-one online sessions – Available via Google Meet, so you can experience the magic of coaching from anywhere in the world.</li>
          <li>In-person sessions – Held in North West London, UK
          </li>
        </ul>
        <p>All Sound Healing Packages will be offered in person: from your home or mine
        </p>

        </div>
      </div>
     </div>
  )
}

export default Sessions