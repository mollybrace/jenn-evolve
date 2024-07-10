"use client"
import React, { useEffect } from 'react'
 import Typed from 'typed.js'
 
 const CCC = () => {

    const el = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Calm, Clarity, Confidence ♡' ],
          typeSpeed: 2000, loop: true
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
   return (
     <div className='flex justify-center text-carmine bg-khaki-cream text-xl md:text-5xl'>
        <span ref={el}/>
     </div>
   )
 }
 
 export default CCC