"use client"
import React, { useEffect } from 'react'
 import Typed from 'typed.js'
 
 const CCC = () => {

    const el = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Calm, Clarity, Confidence ♡', ],
          typeSpeed: 200, loop: true
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
   return (
     <div className='flex justify-center text-violet-700 text-5xl'>
        <span ref={el}/>
     </div>
   )
 }
 
 export default CCC