import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-green font-bold p-2'>Growing with data analytics</p>
        <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h2>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
          <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-zinc-600' strings={['BTB' ,'BTC', 'SASS']}
          typeSpeed={120}
          backSpeed={140}
          loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
        </p>
        <button className='bg-green w-[200px] border border-green rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-black hover:text-green duration-300'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero