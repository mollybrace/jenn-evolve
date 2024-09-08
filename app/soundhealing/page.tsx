import React from 'react'
import Benefits from './components/Benefits'
import Science from './components/Science'
import WhatIsSoundHealing from './components/WhatIsSoundHealing'
import SoundhealingCTA from './components/SoundhealingCTA'
import FAQs from './components/FAQs'
import ForMe from './components/ForMe'
import Title from './components/Title'
import CCC from '../components/CCC'
import SoundNav from './components/SoundNav'


const SoundHealing = () => {

  const benefits = [
    "You want to feel a deeper connection with your body", 
    "You want to destress, rest and relax", 
    "You want to heal your body at a cellular level", 
    "You want to move stuck energy through your body", 
    "You have been feeling stuck in life", "You are looking for more clarity", 
    "You want to find a community of like-minded people", 
    "You want to show yourself more self-compassion", 
    "You are searching for the perfect combination between body, mind and spirit"

  ]

  const faqItems = [
    {question: "What is a group sound bath?", answer: "During a sound bath you’ll be immersed in the soothing sounds of Himalayan Singing Bowls and you’ll feel as if the sounds are washing over you (hence the name). <br> Group sound baths are usually an hour long (unless otherwise stated) and typically involve participants laying down on a yoga mat in savasana position. Although you may lay or sit in any position which feels comfortable and allows you to relax into the experience. Participants close their eyes and focus on their breath as they feel the vibrations created by sound. A sound practitioner facilitates the session using a combination of frequencies created by instruments, voice and music to prepare the nervous system to go into the parasympathetic nervous system state. This creates the environment for the body to go into its own natural healing, relieving stress and anxiety from the body."},
    {question: "What should I bring to a sound bath session?", answer: "Please bring anything that will support you in relaxing. Some people like to bring extra pillows, an eye mask, mat or blankets to help them in bringing the most comfort to their session, however all the above will be provided upon arrival. Dress comfortably and avoid clothes with buttons down the front so that the bowls can be placed directly on your clothing (1:1 sound healing sessions only). Yoga attire is optional. Participants often feel thirsty after a sound bath session so feel free to bring water."},
    {question: "Who should avoid sound healing?", answer: "<p>The following people should avoid 1:1 sound healing sessions: </p> <p>• Those who have a pacemaker <ol><li>• Those who have a history of epilepsy</li><li>• Those who have a serious heart condition</li><li>• Those who have a serious heart condition.</li>• Those with a severe mental health issue </ol></p> <br> <p> Please remember to seek advice from GP and health providers before attending group sound baths. <br><br>If you are pregnant or think you could be, then avoid 1:1 sound healing in the first trimester. After the first trimester, feel free to join group sound healing sessions where the bowls will not be placed directly on your body. <br><br>Please contact Jenn to let her know if you plan to attend group sound baths or 1:1 session.</p>"},
    {question: "Other questions", answer: "For any other questions, please contact us via email/social media or WhatsApp which can be found here (link to bookings page with details)."},
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
        <ForMe benefits={benefits} />
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