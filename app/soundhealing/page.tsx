import React from 'react'
import Benefits from './components/Benefits'
import Science from './components/Science'
import WhatIsSoundHealing from './components/WhatIsSoundHealing'
import SoundhealingCTA from './components/SoundhealingCTA'
import FAQs from './components/FAQs'

const SoundHealing = () => {
  return (
    <div> 
      <section>
        <WhatIsSoundHealing />
      </section>
      <section>
        <Benefits />
      </section>

      <section>
        <Science />
      </section>

      <section>
        <FAQs />
      </section>

      <section>
        <SoundhealingCTA />
      </section>



    </div>

    
  )
}

export default SoundHealing