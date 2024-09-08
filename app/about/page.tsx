import React from 'react'
import AboutJennEvolve from './components/AboutJennEvolve'
import AboutMe from './components/AboutMe'
import ElevatorPitch from '../components/ElevatorPitch'
import Title from './components/Title'
import CallToAction from '../components/CallToAction'
import JourneySoundhealing from './components/JourneySoundhealing'
import WhySoundhealing from './components/WhySoundhealing'
import PresentJourney from './components/PresentJourney'
import AboutNav from './components/AboutNav'
import { Mission } from './components/Mission'


const About = () => {
  return (
      
    <div className='scroll-smooth w-full h-full m-0 p-0'>
      <section>
        <AboutNav />
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