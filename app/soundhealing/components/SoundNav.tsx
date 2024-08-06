import Link from 'next/link'
import React from 'react'

const SoundNav = () => {

const navLinks = [
    {label: "What is Sound Healing", href: "#mission"},
    {label: "Benefits", href: "#benefits"},
    {label: "Sessions", href: "#sessions"},
    {label: "FAQs", href: "#faq"},
  ]
  return (
    <div className='w-full flex flex-col md:flex-row justify-around scroll-smooth'>
        {navLinks.map(link => (
        <Link
            className='border-2 p-2 shadow-lg border-spacing-2 rounded-lg border-khaki-cream text-center hover:bg-khaki-cream font-bold mb-4'
            href={link.href}
            key={link.href}>
                {link.label}
        </Link>

        ))}
    </div>
   
  )
}

export default SoundNav