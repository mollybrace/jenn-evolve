import React from 'react'
import AboutNav from './AboutNav'

const Title = () => {
  return (
    <div className='pl-2 border'>
        <p className='text-xl'>A little bit about</p>
        <p className='text-5xl pb-6 pl-6'>Jenn Evolve</p>

        <section>
        <AboutNav />
      </section>
    </div>
  )
}

export default Title