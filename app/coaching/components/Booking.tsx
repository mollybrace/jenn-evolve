import React from 'react'
import SessionCard from './SessionCard'

let facts = [
  "1:1", "Group"
]

const Booking = () => {
  return (
    <div>
        <div className='pl-4 m-12'>
            <p className='text-5xl pl-4'>Sessions</p>

            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6'>
     
     {facts.map((fact) => (
       <SessionCard fact={fact} />
     ))}
 
   </div>

            
        </div>
    </div>
  )
}

export default Booking