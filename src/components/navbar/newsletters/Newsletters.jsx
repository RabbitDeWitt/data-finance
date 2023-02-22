import React from 'react'
import Button from '../../button/Button'

function Newsletters() {
  return (
    <div className='w-full py-16 text-white bg-black px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h2>
          <p>
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input type="email" placeholder='Enter e-mail' className=' w-full mr-4 p-3 flex rounded-md text-black'/>
            <Button text='Notify Me' />
          </div>
          <p> We care bout the protection of your data. Read our <span className='text-green cursor-pointer underline'>Privacy Policy.</span></p>
        </div>
      </div>
    </div>

    
  )
}

export default Newsletters