import Link from 'next/link'
import React from 'react'

const AboutNav = () => {

const navLinks = [
    {label: "Mission & Values", href: "#mission"},
    {label: "My Story: From Self-Discovery to Coaching", href: "#coaching"},
    {label: "My Story: The Power of Sound", href: "#sound-healing"}  
  ]
  return (
    <div className='w-full ml-0  scroll-smooth pt-6 mx-12 '>
      <div className='flex flex-col justify-around md:flex-row '>
        {navLinks.map(link => (
        <Link
            className='border-2 p-2 shadow-lg border-spacing-2 rounded-lg border-khaki-cream text-center hover:bg-khaki-cream font-bold mb-4 mx-12'
            href={link.href}
            key={link.href}>
                {link.label}
        </Link>

        ))}

      </div>
    </div>
   
  )
}

export default AboutNav