import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div>
    <div className='text-5xl pl-4 py-5 top-0'>Life Coaching?</div>
    <div className='flex flex-col justify-center items-center lg:flex-row'>
      <div className='pl-3 basis-1/2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae libero cupiditate, porro modi sed praesentium a doloremque voluptatum, ducimus ullam tenetur maiores possimus suscipit, aliquam aliquid amet facilis. Expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi.</p>
        <p className='pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perferendis cupiditate, beatae libero consequatur aliquam, exercitationem non, officia perspiciatis repellat ipsam corporis voluptatibus tenetur unde et quas enim placeat delectus.</p>

      </div>
    <div className='basis-1/2  md:items-center justify-center flex border'>
    <Image 
                src="/soundhealing.JPG"
                alt="profile photo"
                width={400}
                height={400} 
                layout='responsive'
                className='py-10 px-6 md:px-20' 
                />

                </div>
    </div>
</div>
)
}

export default Intro