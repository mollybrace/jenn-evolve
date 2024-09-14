import React from 'react'
import SessionCard from './SessionCard'

const Science = () => {

  const facts = [
    {fact: "Chakra Balancing",
    type: "(1:1)",
    information: "7 Himalayan bowls, which have been specifically tuned to a chakra frequency, will be placed around and above the body. As the singing bowls are played, drift into a tranquil state focusing on the sounds and feeling the vibrations. The body will be brought back to harmonic balance and restoration. Choose this session, if you have been feeling out of balance and alignment recently.",
    message: "Hi! I would like to enquire about a Chakra Balancing session..."},
    {fact: "Brainwave entrainment",
    type: "(1:1)", 
    information: "8 Himalayan bowls will be used to entrain the brainwaves to synchronise with the perfect resonance of the bowls. Choose this session for deep meditation, creative thinking and clarity.",
    message: "Hi! I would like to enquire about a brain wave entrainment session..."},
    {fact: "Sound Massage",
    type: "(1:1/couple)",
     information: "Experience singing bowls placed on the body, harmonising cellular tissue, releasing tension, stress and anxiety through sound and vibration. Choose this session for deep relaxation.",
     message: "Hi! I would like to enquire about a sound and vibration massage..."},
    {fact: "Warm Water Therapy", 
    type: "(1:1)",
    information: "A restorative treatment designed to relieve pain while promoting a deep relaxation and therapeutic benefits. As the muscles relax and stress melts away, you’ll experience a soothing escape from physical discomfort. Choose this session if you find it challenging to relax or if you are dealing with some physical pain in your body.",
    message: "Hi! I would like to enquire about a warm water therapy session..."},
    {fact: "Sound Bath Meditation", 
    type: "(1:1/couple/group)", 
    information: "Experience a guided meditation while lying in the shavasana yogic position, enhanced by a range of soothing instruments. This session aims to stimulate your theta brainwaves, helping you fall into a deep meditative state. Choose this option if you’re seeking blissful relaxation or want to share the experience with a community of like-minded people.",
    message: "Hi! I would like to enquire about a sound bath meditation session..."},
    {fact: "Chakra Awareness Meditation with Mantra, Mudra & Yantra",  
    type: "(1:1/couple/group)",
    information: "Engage in an active chanting meditation session followed by a passive meditative state enhanced by the enchanting sounds of Himalayan Singing Bowls, bells and chimes. This practice allows the energy to flow freely throughout your body and supports a strong connection between the mind and body.",
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

      </div>

  )
}

export default Science