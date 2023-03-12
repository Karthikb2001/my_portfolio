
import React from 'react'
import {motion} from 'framer-motion';
import pdf from '../assets/Resume.pdf'
import {
    
    FaGithub,
    FaLinkedin
  
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';

const Socialiconsbar = () => {
  return (
    <motion.div 
initial={{ opacity: 0, x: -180 }}
animate={{ opacity: 1, x: 0 }}
transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
class='flex fixed flex-col left-0 top-[12%] sm:top-[35%]'>
  <ul>
    <li class=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-full hover:ml-[-10px] duration-300 bg-blue-600'>
      <a
        class='flex p-5 justify-between items-center w-full text-gray-300'
        href='https://linkedin.com/in/karthik-reddy-bheemireddy/'
        target="_blank"
        rel='noreferrer'
      >
        Linkedin <FaLinkedin size={30} />
      </a>
    </li>
    <li class='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-full hover:ml-[-10px] duration-300 bg-[#333333]'>
      <a
        class='flex p-5 justify-between items-center w-full text-gray-300'
        href='https://github.com/Karthikb2001'
        target="_blank"
        rel='noreferrer'
      >
        Github <FaGithub size={30} />
      </a>
    </li>
    <li class='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-full hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
      <a
        class='flex p-5 justify-between items-center w-full text-gray-300'
        href='mailto:karthikb200106@gmail.com'
      >
        Email <HiOutlineMail size={30} />
      </a>
    </li>
    <li class='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-full hover:ml-[-10px] hover: duration-300 bg-[#565f69]'>
      <a
        class='flex p-5 justify-between items-center w-full text-gray-300'
        href={pdf}
        target="_blank"
        rel='noreferrer'
      >
        Resume <BsFillPersonLinesFill size={30} />
      </a>
    </li>
  </ul>
</motion.div>
  )
}

export default Socialiconsbar


