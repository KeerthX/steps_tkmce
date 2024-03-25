import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
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
            <h4>icons</h4>
            <p>hv gg jhvcyc vchgu vcjcg cvycgdj jhchci</p>
            <div className='socialmedia'>
              <a href="https://www.facebook.com/yourpage" target="_blank">icon1<i class="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/yourpage" target="_blank">icon2<i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/yourpage" target="_blank">icon3<i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/yourpage" target="_blank">icon4<i class="fab fa-linkedin"></i></a>

            </div>

          </div>
        </div>
        <hr></hr>
       
      </div>
    </div>
  )
}

export default Footer
