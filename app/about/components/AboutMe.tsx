import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='p-10 max-w-full'>
    <div className="flex flex-col items-center  space-y-10 md:flex-row justify-center md:justify-between">
      <div className='flex flex-col items-center md:w-1/2'>
      <div className='image-container'>
        <Image
          src="/about.jpg"
          alt="profile"
          height={600}
          width={600}
          className='rounded-100'
        />
      </div>

      </div>

      <div className='flex flex-col items-center max-w-full md:w-1/2'>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores omnis vitae neque amet vero blanditiis quo, pariatur enim provident unde dicta cum cumque commodi officiis minima tenetur molestias sequi.. </p>
      </div>
    </div>   

    <div>
      <h1>My purpose</h1>
    </div>
</div>
     
  )
}

export default AboutMe