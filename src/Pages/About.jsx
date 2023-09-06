import React from "react";
import { Link } from 'react-router-dom';
import pdficon from '../assets/pdficon2.png'
import pdf from '../assets/Resume.pdf'
import {HashLink as HLink} from 'react-router-hash-link'
import {motion} from 'framer-motion'



const About = () => { 
  return (
    <div class='bg-[#0a192f] '>
    <div
      name="about"
      id="about"
      className="w-full h-screen text-gray-300"
    >
      
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className="mt-56 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-96 sm:w-auto">
          <div className="max-w w-full  text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Karthik, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div className='sm:flex text-2xl text-left'>
              <p>
                Highly skilled, knowledgeable civil engineer.<br/>
                Always looking for a way to learn something and enchance my skills, knowledge and experience.<br/>
                In addition to the civil engineering, I am also having knowledge in the programming softwares.
              </p>
            </div>
          </div>
        </div>
        <div class='flex flex-col grid grid-cols-3 mt-24 gap-2 md:gap-72 '>
          <div class=''><HLink to='#about-skills' smooth ><div class='text-center px-4 py-2 bg-cyan-900 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 text-gray-300 cursor-pointer hover:animate-pulse hover:scale-110 duration-500 rounded-md'>
             Go to Skills</div></HLink></div>
             <div class='order-first'><HLink to='#about-education' smooth ><div class=' text-center px-4 py-2 bg-cyan-900 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 text-gray-300 cursor-pointer hover:animate-pulse hover:scale-110 duration-500 rounded-md'>
             Education</div></HLink></div>
             <div><HLink to='#about-3' smooth ><div class='px-4 py-2 bg-cyan-900 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 text-gray-300 cursor-pointer hover:animate-pulse hover:scale-110 duration-500 rounded-md'>
             Download full Resume</div></HLink></div>
        </div>
        <HLink to='#about-skills' smooth ><div className='mt-5 mb-0 p-10 animate-bounce '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
        </svg>
        </div></HLink>
        
      </div>
      
    </div>
    
    <div 
      name="about-skills"
      id="about-skills"
      className="w-full h-screen text-gray-300 ">

      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" px-10 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="p-5 max-w-[1000px] w-full mb-4 sm:text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Skills
              </p>
          </div><motion.div className=' w-full grid grid-cols-2 gap-6 text-center py-8'>
              <motion.div initial={{ opacity: 0, x: -90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
         className='bg-gradient-to-r from-cyan-900 to-cyan-600 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>AutoCAD</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
        className='bg-gradient-to-r from-cyan-600 to-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Revit</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
        className='bg-gradient-to-r from-cyan-900 to-cyan-600 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>STAAD-Pro</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
        className='bg-gradient-to-r from-cyan-600 to-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>ETABS</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
         className='bg-gradient-to-r from-cyan-900 to-cyan-600 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>AutoDesk 3DS Max</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
        className='bg-gradient-to-r from-cyan-600 to-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Microsoft Excel</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
        className='bg-gradient-to-r from-cyan-900 to-cyan-600 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>C</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
        className='bg-gradient-to-r from-cyan-600 to-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Python</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration: 1 }} smooth
        className='bg-gradient-to-r from-cyan-900 to-cyan-600 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Microsoft Office</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 90 }}
				                  whileInView={{ opacity: 1, x: 0 }}
				                  transition={{ ease: 'easeInOut', duration:1 }} smooth
        className='bg-gradient-to-r from-cyan-600 to-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>HTML, CSS, JS</p>
              </motion.div>
        </motion.div>
      </div>
      <HLink to='#about-education' smooth ><div className='p-2 animate-bounce '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
        </svg>
        </div></HLink>
      </div>
      
    </div>

    <div 
      name="about-education"
      id="about-education"
      className="w-full h-screen bg-[#0a192f] text-gray-300 ">
        <div class='flex flex-col p-10 justify-center items-center w-full'>
        <div class='sm:text-center text-4xl font-bold mt-10 mb-4 underline decoration-cyan-500'>
          Education
        </div>
        
        <div class="container">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto px-10  "
          >
            
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto lg:w-10/12 px-6 py-4 bg-gradient-to-r from-cyan-600 to-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <h3 class="font-semibold text-lg mb-1 text-right">Master of Engineering - Structures and Applied Mechanics</h3>
                <p class="leading-tight font-medium text-right">
                  2023 - 2025<br></br>
                  University of Texas at Arlington<br></br>
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-slate-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6  top-1/2 -mt-24 rounded-full bg-slate-600 "
                ></div>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto ">
              <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-slate-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6  top-1/2 -mt-40 rounded-full bg-slate-600 "
                ></div>
              </div>
              <div
                class=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto lg:w-10/12 px-6 py-4 bg-gradient-to-r from-cyan-900 to-cyan-600 shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <h3 class="font-bold text-2xl text-left mb-1">Bachelor of Technology - Civil Engineering</h3>
                <p class=" text-sm font-medium text-left">
                  2018 - 2022<br></br>
                  Vignana Bharathi Institute of Technology<br></br>
                  (Jawharlal Nehru Technological University, Hyderabad)<br></br>
                  CGPA - 7.13<br></br>
                </p>
              </div>
            </div>
            <div class="flex flex-row-reverse md:contents">
              <div
                class="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto lg:w-10/12 px-6 py-4 bg-gradient-to-r from-cyan-600 to-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <h3 class="font-bold text-2xl text-right mb-1">12th</h3>
                <p class="text-sm font-medium text-right">
                  2016 - 2018<br></br>
                  Sri Chaitanya Junior College<br></br>
                  (Telangana State Board of Intermediate Education)<br></br>
                  Percentage - 89.1 %
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-slate-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6  top-1/2 -mt-40 rounded-full bg-slate-600 "
                ></div>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto ">
              <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-slate-600 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6  top-1/2 -mt-32 rounded-full bg-slate-600 "
                ></div>
              </div>
              <div
                class="col-start-6 col-end-10 rounded-xl my-4 mr-auto lg:w-10/12 px-6 py-4 bg-gradient-to-r from-cyan-900 to-cyan-600 shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <h3 class="font-bold text-2xl text-left mb-1">SSC</h3>
                <p class=" text-sm font-medium text-left">
                  2016<br></br>
                  SSC, Hyderabad, India<br></br>
                  GPA - 9.0<br></br>
                </p>
              </div>
            </div>
            

          </div>
        </div>
        </div>

      </div>

    <div 
      name="about-3"
      id="about-3"
      className="w-full h-96 bg-[#0a192f] text-gray-300 mt-52">
        <div className='flex justify-center items-center'>
        <p className=" text-4xl font-bold inline border-b-4 border-cyan-500">
                Languages
              </p>
        </div>
        <div className=' px-28 w-full grid grid-cols-3 gap-6 text-center py-8'>
              <div className='bg-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Telugu</p>
              </div>
              <div className='bg-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>English</p>
              </div>
              <div className='bg-cyan-900 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Hindi</p>
              </div>
              </div>
        <div class='flex justify-center py-20 text-2xl'>
          <p class='py-5'>Download my C. V. / Resume</p>
          <motion.div initial={{ opacity:0, scale: 0}}
                        whileInView={{opacity:1, scale:1}}
                        transition={{duration:1}} smooth><p class='px-12 '><a
                                href={pdf}
                                target="_blank"
                                rel='noreferrer'
                                smooth
                                ><img src={pdficon} alt='Resume' class='hover:scale-110 duration-500'></img></a></p></motion.div>
        </div>
  </div>

    <div className='flex p-5 bg-[#0a192f] justify-center items-center'>
      <Link  to='/Work' smooth ={true} duration={500} className='px-4 py-2 bg-blue-600 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 text-gray-300 cursor-pointer hover:animate-pulse hover:scale-110 duration-500 rounded-md'>Work </Link>
    </div>
  </div>

  );
};
export default About;
