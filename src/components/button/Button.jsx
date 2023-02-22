import React from 'react'

function Button(props) {
  return (
      <button className='bg-green w-[200px] border border-green rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-black hover:text-green duration-300'>{props.text}</button>      
  )
}

export default Button