import React from 'react'
import {motion} from 'framer-motion'
import SliderComponent from '../components/SliderComponent'
import SliderComponent2 from '../components/SliderComponent2'
import {HashLink as HLink} from 'react-router-hash-link'

const Work = () => {
  return (
    <div class='bg-[#0a192f] '>
      <div
      name="Work-exp"
      id="Work-exp"
      className="flex w-full h-screen text-gray-300 items-center justify-center"
      >
    
    <div class=" container items-center justify-center ">
      <div class=' flex flex-col md:grid grid-cols-9 gap-x-1 gap-y-2 p-10'>
              <div class='col-start-1 col-end-4 sm:text-center text-4xl font-bold mt-10 underline decoration-cyan-500'>
                Work Experience
              </div>
                        <div class=' md:col-start-4 col-end-5 ml-24 '>
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-slate-600 pointer-events-none"></div>
                            </div>
                            <div class="hidden lg:block w-6 h-6 top-1/2 -mt-52 rounded-full bg-slate-600 opacity-1"></div>
                        </div>
                    
                            <div class="col-start-5 col-end-9  font-medium">
                                
                                <motion.div initial={{ opacity: 0, scale: 0.5 }}
				                  whileInView={{ opacity: 1, scale: 1 }} 
                                  transition={{ ease: 'easeInOut', duration: 2 }} smooth
                                   class="space-y-2 bg-gray-800 rounded-lg shadow-only ml-0 lg:w-11/12 px-6 py-4"> 
                                    <h3 class="mb-3 font-bold text-white text-3xl">
                                    Map Creator - Internship
                                    </h3>
                                    <p class="text-1xl text-gray-100 ">
                                    HERE Technologies <br></br>06/2020 - 07/2020
                                    </p>
                                    <hr />
                                    <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                    
                                    <ul class='list-disc'><li>HERE Expert Community Program representing Vignana Bharathi
                                    Institute of Technology (Telangana Academy for Skill and Knowledge,
                                    Department of ITE&C, Government of Telangana).</li>
                                    <li>From this Internship I have gained knowledge in Map Editing
                                    and creating with Here Maps Software, also they have
                                    provided me an Certificate of Recognition as an Map Expert.</li></ul>
                                    
                                    </p>
                                </motion.div>
                            </div>

                            <div class=' md:col-start-4 col-end-5 ml-24 mx-auto'>
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-slate-600 pointer-events-none"></div>
                            </div>
                            <div class="hidden lg:block w-6 h-6 top-1/2 -mt-32 rounded-full bg-slate-600 "></div>
                        </div>
                            <div class="col-start-5 col-end-9 font-medium">
                                <motion.div initial={{ opacity: 0, scale: 0.5 }}
				                                  whileInView={{ opacity: 1, scale: 1 }} 
                                          transition={{ ease: 'easeInOut', duration: 2 }} smooth
                                   class=" space-y-2 bg-gray-800 rounded-lg shadow-only lg:w-11/12 px-6 py-4">
                                    <h3 class="mb-3 font-bold text-white text-2xl">
                                        .........
                                    </h3>
                                    <p class="pb-4 text-sm text-gray-100">
                                        ..........
                                    </p>
                                    <hr />
                                    <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                        .............
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div class='flex justify-center'>
                        <HLink to='#work-projects' smooth ><div className='p-2 animate-bounce'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
        </svg>
        </div></HLink></div>
                        </div>

                        
      </div>

      <div
      name="work-projects"
      id="work-projects"
      className="flex w-full h-screen bg-[#0a192f] text-gray-300 items-center justify-center"
    >

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
				                  whileInView={{ opacity: 1, scale: 1 }} 
                                  transition={{ ease: 'easeInOut', duration: 2 }} smooth 
                                  class=" container items-center justify-center ">
          <p class='text-center text-4xl font-bold mt-10 underline decoration-cyan-500'>Projects</p>
          <div class=' flex flex-col md:grid grid-cols-9 gap-x-1 gap-y-2 p-10'>
              <div class='col-start-1 col-end-4 '>
                <p class='sm:text-left text-2xl font-bold ml-20 mt-10 '>
                  Major Project on 'ANALYTICAL STUDY OF HIGH-RISE
                    STRUCTURE AND COMPARISON BETWEEN DIFFERENT
                    SEISMIC ZONES' (2022)</p>
                <p class=' ml-20 text-justify mt-10'>Using the Etabs software the high-rise building is designed and analyzed under the necessary loading conditions, including Wind and Seismic Loads.</p>
              </div>
                    
                            <div class="col-start-4 col-end-9  font-medium">
                                
                                <div class="space-y-2 bg-gray-800 rounded-lg shadow-only lg:w-11/12 px-6 py-4"> 
                                    <SliderComponent/>
                                </div>
                            </div>

                            
                        </div>
                        </motion.div>


      </div>

      <div name='work-projects'
      id='work-projects'
      className="w-full h-screen bg-[#0a192f] text-gray-300 justify-center items-center ">
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
				                  whileInView={{ opacity: 1, scale: 1 }} 
                                  transition={{ ease: 'easeInOut', duration: 2 }} smooth >
    <p class='text-center text-2xl font-bold p-24 sm:p-0  '>FreeLance Projects</p>

    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
				                  whileInView={{ opacity: 1, scale: 1 }} 
                                  transition={{ ease: 'easeInOut', duration: 2 }} smooth 
                                   class="p-10 md:px-40 "> 
                                    <SliderComponent2 />
                                </motion.div>
    </div>

      </div>
  )
}

export default Work