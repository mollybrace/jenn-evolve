import React from 'react'
import Benefits from './components/Benefits'
import Science from './components/Science'
import WhatIsSoundHealing from './components/WhatIsSoundHealing'
import SoundhealingCTA from './components/SoundhealingCTA'
import FAQs from './components/FAQs'
import ForMe from './components/ForMe'
import SoundNav from './components/SoundNav'
import Instruments from './components/Instruments'


const SoundHealing = () => {

  const faqItems = [
    {question: "How can I get the most out of my sound bath experience?", answer: "During a sound meditation, you’ll be immersed in the soothing sounds of Himalayan Singing Bowls and you’ll feel as if the sounds are washing over you (hence the name). To get the most out of the experience, get comfortable, close your eyes and focus on your breath, connect with your body to feel the vibrations created by sound. Enjoy the silence and learn to let go. Your body will do the rest!"},
    {question: "What should I bring to a sound bath session?", answer: "Pillows, eye masks, yoga mats and blankets will all be provided at our home studio. However, please bring along any of your own comforts that will support you in relaxing. Dress comfortably for the session for example, yoga attire or loungewear. If you have booked a 1:1 sound massage or warm water therapy avoid clothing with buttons down the front so that the bowls can be placed directly on your clothing."},
    {question: "How long will my sound healing session last?", answer: "For 1:1 sound healing, please allow 1 hour and 30-minutes for your session. This will include a 15 minute consultation before the session, 1 hour of sound healing, plus a 15 minute integration, silence and grounding at the end of your session.<br><br> For group sound baths, please allow 1 hour for the group sound bath meditation. Please arrive at the home studio 10 minutes early to allow time to slow down, connect with your body, and relax your mind."},
    {question: "Should I avoid sound healing?", answer: "The following people should avoid 1:1 sound healing sessions:<br><br><ol><li> • Participants who have a pacemakers or other implanted medical devices that can be affected by sound or electromagnetic waves, for example: Deep Brain Stimulators (DBS), Implantable Cardioverter-defibrillators (ICDs) and Brain-computer interfaces (BCIs)</li><li>• Participants who have a serious heart condition</li><li>• Participants who have a history of epilepsy or seizures </li><li>• Participants with a severe mental health issue</li>•Participants with metal implants or fragments near the area being treated, as these can be affected by sound vibrations. </li><li>• Pregnant women, especially within the first trimester </li></ol><br>Individuals who fall within any of these categories, or if you have other health concerns, please seek advice from your GP or health provider before attending group sound baths."},
    {question: "Other questions?", answer: "FFor any other questions, please contact Jenn via email/social media or WhatsApp."},
]



  return (
    <div> 
      <section>
        <SoundNav />
      </section>

      <section>
        <WhatIsSoundHealing />
      </section>

      <section>
        <Instruments />
      </section>

      <section>
        <ForMe />
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