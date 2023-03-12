import React from 'react';
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import Background from '../assets/drawingimage.jpg';
import myphoto from '../assets/Karthikimg.jpg'

const Home = () => {


  return (
    <div
    name="home"
    class="h-screen w-full"
    style={{backgroundImage:`url(${Background})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            }}
  >
    <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-10 md:flex-row animate-fade">
      <motion.div initial={{ opacity: 0, x: -180 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="flex flex-wrap justify-top w-6/12 sm:w-4/12 p-5">
            <img src={myphoto} alt="myphoto" className="mt-12 shadow-lg rounded-full max-w-full h-auto  border-dotted border-2 pointer-events-none" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 180 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      class="flex flex-col justify-center h-full">
        <h2 class="text-4xl sm:text-7xl font-bold text-white ">
          Hi
        </h2>
        
        <p class="text-gray-300 py-3 max-w-md ">
        Detail-oriented Civil Engineer with a zeal for solving complex problems with my skills. Since beginning my journey in this field, my dedication to the work and motivation to learn has led me to a great experience. I’m grateful for a profession am passionate about, and am proud to share examples of my greatest work. Take a moment to check out my portfolio, and get in touch with any questions.
        </p>
        <div  class="flex w-fit px-4 py-2 bg-blue-600 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 text-gray-300 cursor-pointer hover:animate-pulse hover:scale-110 duration-500 rounded-md">
          <Link
            to="/About"
            smooth ={true}
            duration={500}
          >
            About Me
          </Link>
        </div>
      </motion.div>
      <div>
        
      </div>
    </div>
  </div>
  );
};
export default Home;