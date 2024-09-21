"use client"
import Image from 'next/image'
import React from 'react'

const Alternative = () => {

  const photos = [
    "/ig1.jpg", "/ig2.jpg", "/ig3.jpg", "/ig4.jpg", "/ig5.jpg","/ig6.jpg","/ig7.jpg", "/ig8.jpg",
  ]
  return (
    <div>
        <div className='flex justify-center'>
        <a href="https://www.instagram.com/jenn.evolve/?hl=en" target="_blank">
            <p className='text-5xl md:text-7xl md:pl-14 pl-10 pb-6'>@jenn.evolve
            </p></a>
      </div>
      <div className='flex justify-center'>
        <div className=' grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-4 p-4'>
        {photos.map(photo => (
          <div className='md:h-[290px] md:w-[290px] h-[200px]'>
                    <Image src={photo}
                    alt="instam grid"
                    width={300}
                    height={300} 
                    className='object-cover h-full w-full '/>
          </div>

))}
        </div>

      </div>

   
           
    </div>
  )
}

export default Alternative