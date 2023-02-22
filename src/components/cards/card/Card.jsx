import React from 'react'
import Button from '../../button/Button'


function Card(props) {
  return (
    
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={props.img} alt="" />
          <h2 className='text-2xl font-bold text-center py-8'>{props.plan}</h2>
          <p className='text-center text-4xl font-bold'>{props.price}</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>{`${props.storage} Storage`}</p>
            <p className='py-2 border-b mx-8'>{`${props.numOfUsers} ${props.numOfUsers > 1 ? 'Users' : 'User'} Allowed`}</p>
            <p className='py-2 border-b mx-8'>{`Send up to ${props.text} GB`}</p>
          </div>
          <Button text='Start Trial' />
        </div>
     
  )
}

export default Card