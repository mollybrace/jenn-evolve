"use client"
import Link from 'next/link'
import React, { useState, useEffect, use } from 'react'


const navLinks = [
  {label: "Home", href: "/"},
  {label: "About", href: "/about"},
  {label: "Sound Healing", href: "/soundhealing"},
  {label: "Coaching", href: "/coaching"},
]


const Nav = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [scrolled, SetIsScrolled] = useState(true)


  const toggleNavbar = () :void => {
    setIsClicked(!isClicked)
  }

  
   
  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 66 ) {
      SetIsScrolled(true)
    } else SetIsScrolled(false)
  }
   
  
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])


    useEffect(() => {
      const changeNavOnScroll = () => {
        const navbar = document.getElementById("nav-bar")
        const openNav = document.getElementById("open-nav")
    
        if (navbar && openNav) {
      if (scrolled) {
        navbar.classList.add("bg-khaki-cream", "shadow-2xl", "sticky", "top-0")
      } else {
        navbar.classList.remove("bg-khaki-cream", "shadow-2xl", "sticky")
        openNav.classList.remove("bg-khaki-cream")
      }
      if (isClicked && scrolled) {
        openNav.classList.add("bg-khaki-cream")
      } else
      openNav.classList.remove("bg-khaki-cream")
    }
  }
    changeNavOnScroll()
    },[scrolled, isClicked])

  return (
    <nav id="nav-bar" className={`top-0 relative w-full bg-red z-10 transition`}>
      <div>
          <button
              className='inline-flex flex-row items-center p-2 rounded-md text-white'
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
  <div id="open-nav" className='flex absolute top-full left-0 w-full'>
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


