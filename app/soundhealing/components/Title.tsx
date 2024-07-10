import React from 'react'
import SoundNav from './SoundNav'

const Title = () => {
  return (
    <div className='pl-2 border'>
        <p className='text-xl'>A little bit about</p>
        <p className='text-5xl pb-6 pl-6'>Sound Healing</p>

        <section>
        <SoundNav />
      </section>
    </div>
  )
}

export default Title