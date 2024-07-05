import Link from 'next/link'
import React from 'react'

const AboutNav = () => {

const navLinks = [
    {label: "Mission & Values", href: "#mission"},
    {label: "My Journey to Coaching", href: "#coaching"},
    {label: " My Journey to Sound Healing", href: "#sound-healing"},
    {label: "Present Day", href: "#present"},
  ]
  return (
    <div className='w-full flex justify-around scroll-smooth'>
        {navLinks.map(link => (
        <Link
            className='border-2 p-2 shadow-lg border-spacing-2 rounded-lg border-khaki-cream hover:bg-khaki-cream font-bold mb-4'
            href={link.href}
            key={link.href}>
                {link.label}
        </Link>

        ))}
    </div>
   
  )
}

export default AboutNav