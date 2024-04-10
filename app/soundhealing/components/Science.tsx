import React from 'react'

const Science = () => {

  const facts = [
    {fact: "Vibrational Medicine", information: "Sound healing operates on the principle that everything in the universe, including our bodies, is in a state of vibration. By using specific frequencies and vibrations, sound healing aims to restore harmony and balance to the body's energy centers."},
    {fact: "Brainwave Entrainment", information: "Certain sound frequencies have been shown to influence brainwave patterns and induce specific states of consciousness, such as relaxation or meditation."},
    {fact: "Pain Management", information: "Sound therapy has been found to be effective in alleviating pain associated with various conditions, including chronic pain, arthritis, and fibromyalgia. The soothing vibrations of sound can help distract from pain signals and promote the release of endorphins, the body's natural painkillers."},
    {fact: "Brain Plasticity", information: "merging research suggests that sound healing may have the potential to induce neuroplastic changes in the brain. By stimulating neural pathways and promoting synaptic connections, sound therapy could potentially enhance cognitive function, memory, and learning abilities."},
    {fact: "Emotional Healing", information: "Sound healing can have profound effects on emotional well-being by helping to release stored emotions, reduce anxiety and depression, and promote a sense of inner peace and balance. Music therapy, in particular, has been used successfully to support individuals with mental health challenges."},
    {fact: "Enhanced Immune Function", information: "Research suggests that sound healing may have immune-boosting effects. Studies have shown that listening to certain types of music can increase the production of immune cells, enhance antibody levels, and improve overall immune function."}

  ]
  return (
    <div className=" text-bistre relative">

    <div className='flex flex-col items-center '>
    <h2 className="text-3xl md:text-5xl my-5 pt-1">Science of Soundhealing</h2>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-6'>
     
      {facts.map((fact) => (
         <div className='shadow-2xl rounded-lg bg-khaki-cream flex flex-col text-center my-6 md:mx-6'>
            <p className='font-bold text-xl p-4 border bg-bistre/90 rounded-t-lg text-khaki-cream'>{fact.fact}</p>
          <p className='p-4 text-bistre'>{fact.information}</p></div>
      ))}
  
    </div>

      </div>

  )
}

export default Science