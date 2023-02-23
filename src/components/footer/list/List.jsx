import React from 'react'

function List(props) {
  return (
    <div>
      <h6 className='font-medium text-gray-400'>{props.category}</h6>
      <ul>
        {props.items.map(item => (
          <li className='py-2 text-sm cursor-pointer hover:text-green hover:translate-x-1 duration-300'>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default List