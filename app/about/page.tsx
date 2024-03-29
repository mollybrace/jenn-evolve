import React from 'react'
import AboutJennEvolve from './components/AboutJennEvolve'
import AboutMe from './components/AboutMe'
import ElevatorPitch from './components/ElevatorPitch'
import Title from './components/Title'


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

    </div>
  )
}

export default About