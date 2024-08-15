"use client"
import React, { useState, useEffect } from 'react'
import SmallNav from './SmallNav'
import Image from 'next/image'

const Nav2 = () => {
    const [isClicked, setIsClicked] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const navLinks = [
        {label: "Home", href: "/"},
        {label: "About", href: "/about"},
        {label: "Sound Healing", href: "/soundhealing"},
        {label: "Coaching", href: "/coaching"},
      ]

      
    const toggleNavbar = () :void => {
        setIsClicked(!isClicked)
      }

      useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    
  return (
        <div className={`fixed w-full flex  bg-opacity-90 justify-between  h-[90px] top-0 z-40 ${scrolled ? 'bg-khaki-cream' : 'bg-transparent'}`}>
            <div className=''>
                <div className=' w-[100px] rounded-lg'>
                <a href="/">
                    <Image 
                    src="/footer-background.png"
                    alt="logo"
                    height={150}
                    width={150}
                    className='m-4 rounded-full flex items-center justify-center h-16 w-16  object-cover shadow-md  text-white z-20'/></a>
                    </div>
            </div>
            
 
            <div className='flex border'>
                <div className='relative flex items-center'>
                <div className='absolute top-0 right-0 z-50 w-[100px] justify-center flex h-full'>
                    <button
                        onClick={toggleNavbar}>
                            {isClicked? (
                                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                                     <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                   </svg> 
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            )
                            }
                    </button>
                </div>
                </div>
            </div>
            {isClicked && <SmallNav toggleNavbar={toggleNavbar} navLinks={navLinks}/>}
        </div>
  )
}

export default Nav2