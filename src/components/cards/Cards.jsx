import React from 'react'
import plans from '../../data/plans'
import Card from './card/Card'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {plans.map((plan) => (
          <Card
            img={plan.img} 
            price={plan.price}
            name={plan.name}
            storage={plan.storage}
            numOfUsers={plan.numOfUsers}
            send={plan.send}
          />
        ))}
        
      </div>
    </div>
  )
}

export default Cards