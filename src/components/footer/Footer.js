import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className='footer bg-[#232F3E]'>
      <div className='footer-section'>
        <div className='footer-links flex-col md:flex  '>
          <div className='footer-links-div'>
            <h4 className='font-bold'>Steps Tkmce</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a>
          </div>

      
          <div className='footer-links-div'>
            <h4>Contact</h4>
            <p>stepstkmce@gmail.com</p>
            <div className='socialmedia'>
              <a href="https://www.facebook.com/yourpage" target="_blank"><InstagramIcon /></a>
              <a href="https://twitter.com/yourpage" target="_blank"><LinkedInIcon /></a>
             
            </div>

          </div>
        </div>
        <hr></hr>
       
      </div>
    </div>
  )
}

export default Footer