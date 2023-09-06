import React from 'react'
import {FaLinkedin, FaGithub, FaPhone} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' 
    className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <div class="p-5 flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                  <div>
                    
                    <a
              class='flex p-2 justify-between items-center w-full text-gray-300 text-lg hover:underline decoration-blue-500 duration-800'
              href='mailto:karthikb200106@gmail.com'>
              karthikb200106@gmail.com
            </a></div>
                </div>
                <div class="p-1 flex items-center ">
                  <FaPhone size={30} class="p-2 flex items-center bg-white rounded-full " />
              <a
              class='flex p-2 justify-between items-center w-full text-gray-300 text-lg hover:underline decoration-blue-500 duration-800'
              href='tel:+16822415585'>
              +1 682 241 5585
            </a>
            </div>
            </div>
            
            <div class='p-10 flex text-gray-300 items-center'>
          <p class=' p-2 text-2xl underline '>Connect with me</p>
          <div class='p-5'><a
              class='p- flex  text-gray-300 hover:scale-110 duration-500'
              href='https://linkedin.com/in/karthik-reddy-bheemireddy/'
              target="_blank"
              rel='noreferrer'
            >
             <FaLinkedin size={30} />
            </a></div>
            <div class='p-5'><a
              class='flex text-gray-300 hover:scale-110 duration-500'
              href='https://github.com/Karthikb2001'
              target="_blank"
              rel='noreferrer'
            >
            <FaGithub size={30} />
            </a>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
            {/*<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="karthik-reddy-bheemireddy" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/karthik-reddy-bheemireddy?trk=profile-badge">Karthik Reddy Bheemireddy</a></div>
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="karthik-reddy-bheemireddy" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/karthik-reddy-bheemireddy?trk=profile-badge">Karthik Reddy Bheemireddy</a></div>*/}
              </div>
        </div>

        </div>
        
    </div>
  )
}
export default Contact