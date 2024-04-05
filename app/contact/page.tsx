import React from 'react'
import ContactForm from './components/ContactForm'
import Alternative from './components/Alternative'

const page = () => {
  return (
    <div>
      <section>
        <ContactForm />
      </section>

      <section>
        <Alternative />
      </section>
    </div>
  )
}

export default page