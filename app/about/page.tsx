import React from 'react'
import AboutJennEvolve from './components/Values'
import AboutMe from './components/Coaching'
import CallToAction from '../components/CallToAction'
import JourneySoundhealing from './components/JourneySoundhealing'

import AboutNav from './components/AboutNav'
import { Mission } from './components/Mission'


const About = () => {
  return (
      
    <div className='scroll-smooth w-full h-full m-0 p-0'>
      <section>
        <AboutNav />
      </section>
      <section>
        <Mission />
      </section>
      <section>
        <AboutJennEvolve />
      </section>
      <section >
        <AboutMe />
      </section>
      <section>
        <JourneySoundhealing />
      </section>


      <section>
        <CallToAction />
      </section>

    </div>
  )
}

export default About