import React from 'react'

const Science = () => {

  const facts = [
    {fact: "Chakra Balancing",
    type: "(1:1/couple)",
    information: "8 Himalayan bowls will be used on, around and above the body, which have been specifically tuned to a chakra frequency. As Jenn plays the singing bowl, you will be calmed into a tranquil state while listening to the sounds and feeling the vibrations, the body will be brought back to harmonic balance and restoration."},
    {fact: "Brainwave entrainment",
    type: "(1:1/couple)", 
    information: "8 Himalayan bowls will be used to entrain the brainwaves to synchronize with the perfect resonance of the bowls. Brain entrainment is a great session for deep meditation, creative thinking and clarity."},
    {fact: "Sound and Vibration Massage",
    type: "(1:1)",
     information: "Harmonizing cellular tissue, releasing tension, stress and anxiety through sound and vibration the sound and vibration massage will instill a deep relaxation."},
    {fact: "Warm Water Therapy", 
    type: "(1:1)",
    information: "If you find it more difficult to relax or if you have some physical pains in your body, this one is perfect for you! This is a restorative treatment designed to alleviate pain while promoting a deep relaxation and therapeutic benefits as the muscles relax and stress melts away."},
    {fact: "Sound Bath Meditation", 
    type: "(1:1/couple/group)", 
    information: "Sound healing can have profound effects on emotional well-being by helping to release stored emotions, reduce anxiety and depression, and promote a sense of inner peace and balance. Music therapy, in particular, has been used successfully to support individuals with mental health challenges."},
    {fact: "Chakra Awareness Meditation with Mantra, Mudra & Yantra",  
    type: "(1:1/couple/group)",
    information: "Active chanting meditation session followed by a passive meditative state while listening to the enchanting sounds of Himalayan Singing Bowls, bells and chimes. Allowing the energy to flow freely throughout your body and build a strong connection between the body, mind and spirit."}

  ]
  return (
    <div className=" text-bistre relative">
     <div className='flex flex-col items-center '>
      <h2 className="text-3xl md:text-5xl my-5 pt-1">Sound Healing Sessions</h2>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-6'>
     
      {facts.map((fact) => (
         <div className='shadow-2xl rounded-lg bg-khaki-cream flex flex-col transition ease-in-out hover:bg-carmine hover:text-khaki-cream text-center my-6 md:mx-6'>
            <p className='font-bold text-2xl p-4 rounded-t-lg  md:h-[75px]'>{fact.fact}</p>
            <p>{fact.type}</p> 
            <p className='p-4'>{fact.information}</p>
             <p className='text-xl'>Book now</p>
          </div>
      ))}
  
    </div>

      </div>

  )
}

export default Science