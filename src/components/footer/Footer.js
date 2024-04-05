import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (

    <div className='  bg-[#232F3E] text-white h-fit p-10 ' style={{fontFamily:'monospace'}}>
      
      <div className='md:flex   font-poppins'>
        <div className='flex-col md:w-1/2 w-full mb-10'>
          <h2 className='font-bold'>Trika</h2>
          <p>Enrich.empower.emanate</p>

        </div>

        <div className='flex md:w-1/2 w-full justify-between md:pl-10 pl-0 md:justify-between '>
          <div className='flex-col '>
            <h2 className='uppercase'><a href='/gallery'>Gallery</a></h2>

          </div>


          <div>
            <h2 className='uppercase'><a href='/events'>Events</a></h2>
          </div>


          <div className='flex flex-col gap-5 mb-5' >
            <h2><a href='/contact'>CONTACT</a></h2>
            <div className='footer-below-left md:1/2 w-full md:pb-6'>
          <div className=' flex justify-center items-end md:justify-end md:pr-20  '>
            <a href="https://www.instagram.com/stepstkmce/" ><InstagramIcon /></a>
            <a href="https://www.linkedin.com/company/steps-tkmce/about/"><LinkedInIcon /></a>
          </div>
        </div>

          </div>

        </div>
      </div>

      <hr></hr>
      <div className=' '>
        <div className='footer-below-right  w-full flex justify-center items-center'>
          <div className='copy-right mt-6 '>
            <p>&copy; 2024 Steps TKMCE. All rights reserved.</p>
          </div>

        </div>
        
      </div>
    </div>


  )
}

export default Footer