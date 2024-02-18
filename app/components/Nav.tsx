"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const navLinks = [
  {label: "Home", href: "/"},
  {label: "About", href: "/about"},
  {label: "Sound Healing", href: "/soundhealing"},
  {label: "Coaching", href: "/coaching"},
]


const Nav = () => {
  const [isClicked, setIsClicked] = useState(false)

  const toggleNavbar = () :void => {
    setIsClicked(!isClicked)
  }

  return (
    <nav className='top-0'>
      <div>
          <button
              className='inline-flex items-center p-2 rounded-md text-white'
              onClick={toggleNavbar}
          >

              {isClicked ? (
                <svg
                  className='h-12 w-12 mt-1 mr-2'
                  xmlns='http:??www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
              ) : (
                <svg 
                  className="w-12 h-12 mt-1 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                  <path 
                    stroke="currentColor" stroke-linecap="round" stroke-width="1" 
                    d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
              )}
          </button>
</div>
{isClicked && (
  <div className='flex'>
      <ul className='text-white border-content flex flex-row'>
        {navLinks.map(link => (
          <li key={link.href} className='border-content px-2 py-6 text-xl hover:underline'>
            <Link className="bg-black bg-opacity-30" href={link.href}>
              {link.label}
            </Link>
          </li>  
) )}
        </ul>

  </div>
  
)}
</nav>
  )
}

export default Nav


