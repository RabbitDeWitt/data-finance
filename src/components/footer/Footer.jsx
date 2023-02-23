import React from 'react'
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'
import lists from '../../data/lists'
import List from './list/List'

function Footer() {
  return (
    <footer className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h2 className='w-full text-3xl font-bold text-green uppercase'>React.</h2>
        <p className='py-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto laudantium dignissimos itaque consequuntur mollitia doloribus tempore consequatur amet voluptas!
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <a href="#">
            <FaFacebook size={30} />
          </a>
          <a href="#">
            <FaInstagram size={30} />
          </a>
          <a href="https://github.com/RabbitDeWitt" target='_blank'>
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/david-santos-de-oliveira-coelho-74b569b8/" target='_blank'>
            <FaLinkedin size={30} />
          </a>
          <a href="#">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>

        {lists.map(list => (
          <List category={list.category} items={list.items} />
        ))}

      </div>
    </footer>
  )
}

export default Footer