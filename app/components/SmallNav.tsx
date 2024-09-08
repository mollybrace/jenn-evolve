import Link from 'next/link'
import React from 'react'

const SmallNav = ( { toggleNavbar, navLinks }) => {
  return (
    <div className='fixed top-0 left-0 h-full bg-white-800 bg-opacity-95 bg-khaki-cream justify-center w-full text-3xl text-white pt-20 flex text-center z-40'>
        <ul className='w-full space-x-10'>
            {navLinks.map(link => (
            
                <li key={link.href}  onClick={toggleNavbar}className='hover:underline p-4 m-4 ber'>
                    <Link href={link.href}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SmallNav