import React from 'react'

const SessionCard = ({fact}) => {
  return (
    <div className='container h-min w-[300px]  border md:w-[400px] bg-khaki-cream shadow-2xl rounded-lg flex flex-col justify-around transition ease-in-out hover:bg-carmine hover:text-khaki-cream text-center my-6 md:mx-6'> 
      <div className='flex flex-col h-full'>

        <div className='top-0 h-min '>
          <p className='font-bold text-xl md:text-2xl pt-4'>{fact.fact}</p>
          <p className='italic'>{fact.type}</p>
        </div>
        
        <div>
        </div>
        
        <div>
           <p className='p-4 text-md md:text-lg'>{fact.information}</p>
        </div>
      </div>

    

  </div>

  )
}

export default SessionCard