import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (

    <div className='footer font-poppins '>
      <hr></hr>
      <div className='md:flex  p-2 '>
        <div className='flex-col md:w-1/2 w-full mb-10'>
          <h2 className='font-bold'>STEPS TKMCE</h2>
          <p>ref value. If you cannot provide a valid href,
            but still need the element to resemble a link, use a button and change </p>

        </div>

        <div className='flex md:w-1/2 w-full justify-between md:pl-10 pl-0 md:justify-between'>
          <div className='flex-col '>
            <h2>ABOUT</h2>
            <ul>
              <li><a href="#">About</a></li>
            </ul>
          </div>


          <div>
            <h2>TEAM</h2>
            <ul>
              <li><a href="#">Team</a></li>
            </ul>
          </div>


          <div>
            <h2>CONTACT</h2>
            <ul>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>

      <hr></hr>
      <div className='footer-below p-2'>
        <div className='footer-below-right md:w-1/2 w-full'>
          <div className='copy-right '>
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>

        </div>
        <div className='footer-below-left md:1/2 w-full md:pb-6'>
          <div className=' flex justify-center items-end md:justify-end md:pr-20  '>
            <a href="#" ><InstagramIcon /></a>
            <a href="#"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Footer