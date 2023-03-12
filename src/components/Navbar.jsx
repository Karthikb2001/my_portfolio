import React, { useState } from 'react'; 
import {motion} from 'framer-motion';
import {
  FaBars,
  FaTimes

} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import {NavLink } from 'react-router-dom';

import myphoto from '../assets/Karthikimg.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <motion.div initial={{ opacity: 0, y: -180 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
     class='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      
        <div class="flex items-center space-x-4">
        <Link to='/' smooth={true} duration={500}><img src={myphoto} alt="myphoto_icon" className="flex -space-x-1 overflow-hidden inline-block h-7 w-7 rounded-full ring-2 ring-blue cursor-pointer pointer-events-none">
        </img></Link>
        <div class="font-medium dark:text-white">
        <div>        
          <h1 class='font-thin text-2xl italic font-serif cursor-pointer'><Link to='/' smooth={true} duration={500}>Karthik Reddy Bheemireddy</Link></h1>
        </div>
        </div>
        </div>

        
      {/* menu */}
      <ul class='hidden md:flex gap-x-8 '>
        <li class='transition transform hover:underline  '>
          <NavLink to='/' smooth={true} duration={500} className={({ isActive }) => isActive ? 'underline decoration-blue-500 ' : ''} >
            Home
          </NavLink>
        </li>
        <li class='transition transform hover:underline'>
          <NavLink to='/About' smooth={true} duration={500} className={({ isActive }) => isActive ? 'underline decoration-blue-500 ' : ''}>
            About
          </NavLink>
        </li>
        
        <li class='transition transform hover:underline'>
          <NavLink to='/Work' smooth={true} duration={500} className={({ isActive }) => isActive ? 'underline decoration-blue-500 ' : ''}>
            Work
          </NavLink>
        </li>
        <li class='transition transform hover:underline'>
          <NavLink to='/Contact' smooth={true} duration={500} className={({ isActive }) => isActive ? 'underline decoration-blue-500 ' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
      
      {/* Hamburger */}
      <div onClick={handleClick} class='md:hidden md:fixed md:z-50 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        class={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '
        }
      >
        <li class='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='/' smooth={true} duration={500} className={({ isActive }) => isActive ? 'underline decoration-blue-500 ' : ''}>
            Home
          </NavLink>
        </li>
        <li class='py-6 text-4xl'>
          {' '}
          <NavLink onClick={handleClick} to='/About' smooth={true} duration={500} className={({ isActive }) => isActive ? 'underline decoration-blue-500 ' : ''}>
            About
          </NavLink>
        </li>
        
        <li class='py-6 text-4xl'>
          {' '}
          <NavLink onClick={handleClick} to='/Work' smooth={true} duration={500} className={({ isActive }) => isActive ? 'underline decoration-blue-500 ' : ''}>
            Work
          </NavLink>
        </li>
        <li class='py-6 text-4xl'>
          {' '}
          <NavLink onClick={handleClick} to='/Contact' smooth={true} duration={500} className={({ isActive }) => isActive ? 'underline decoration-blue-500 ' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
      
      
      
      
      
    </motion.div>
  );
};
export default Navbar;