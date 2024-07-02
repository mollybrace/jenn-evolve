import React from 'react'
import AboutJennEvolve from './components/AboutJennEvolve'
import AboutMe from './components/AboutMe'
import ElevatorPitch from './components/ElevatorPitch'
import Title from './components/Title'
import CallToAction from '../components/CallToAction'
import JourneySoundhealing from './components/JourneySoundhealing'
import WhySoundhealing from './components/WhySoundhealing'
import PresentJourney from './components/PresentJourney'


const About = () => {
  return (
    <div>
      <section>
        <Title />
      </section>
      <section>
        <ElevatorPitch />
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
        <WhySoundhealing />
      </section>
      <section>
        <PresentJourney />
      </section>

      <section>
        <CallToAction />
      </section>

    </div>
  )
}

export default About