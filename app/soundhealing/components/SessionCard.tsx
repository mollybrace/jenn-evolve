import React from 'react'

const SessionCard = ({fact}) => {
  return (
    <div className='container h-[450px] w-[300px] md:h-[500px] border md:w-[400px] bg-khaki-cream shadow-2xl rounded-lg flex flex-col justify-around transition ease-in-out hover:bg-carmine hover:text-khaki-cream text-center my-6 md:mx-6'> 
       <div>
        <p className='font-bold text-xl md:text-2xl p-4'>{fact.fact}</p>
        <p className='italic'>{fact.type}</p> 
       </div>

       <div>
         <p className='p-4 text-md md:text-lg'>{fact.information}</p>
       </div>

       <div>
         <p className='text-lg md:text-xl'>Book now</p>
      </div>

        <div>
            <form>
                <text></text>
            </form>

        </div>
  </div>

  )
}

export default SessionCard