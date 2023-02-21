import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='h-24 flex justify-between items-center max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-green uppercase'>React.</h1>
      <ul className='hidden font-semibold md:flex'>
        <li className='p-4 w-max cursor-pointer'>Home</li>
        <li className='p-4 w-max cursor-pointer'>Account</li>
        <li className='p-4 w-max cursor-pointer'>Sign In</li>
        <li className='p-4 w-max bg-white text-black rounded-md cursor-pointer hover:bg-black hover:text-white border duration-300'>Get Started</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={!nav ? 'fixed left-0 top-0 h-full w-[40%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-green px-4 leading-[96px] uppercase'>React.</h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-b-gray-600 cursor-pointer'>Home</li>
          <li className='p-4 border-b border-b-gray-600 cursor-pointer'>Company</li>
          <li className='p-4 border-b border-b-gray-600 cursor-pointer'>Resources</li>
          <li className='p-4 border-b border-b-gray-600 cursor-pointer'>About</li>
          <li className='p-4 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;