import React from 'react'
import Laptop from '../../assets/laptop.jpg'
import Button from '../button/Button'

function Analytics() {
  return (
    <div className='w-full py-16 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
        <div className='flex flex-col justify-center'>
          <p className='text-green uppercase font-bold'>Data analytics dashboard</p>
          <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h2>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium doloribus quae tempora accusantium architecto ipsum velit laboriosam corporis accusamus repellat sequi placeat nobis adipisci, deserunt eius voluptatibus, atque suscipit?
          </p>
          <div className='mx-auto md:mx-0'>
            <Button text='Get Started'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics