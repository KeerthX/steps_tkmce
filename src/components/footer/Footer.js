import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (

    <div className='footer'>
      <hr></hr>
      <div className='footer-main'>
        <div className='footer-left'>
          <h2>STEPS TKMCE</h2>
          <p>ref value. If you cannot provide a valid href, 
          but still need the element to resemble a link, use a button and change </p>
        
        </div>

       <div className='footer-right'>
        <div>
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
      <div className='footer-below'>
      <div className='footer-below-right'>
      <div className='copy-right'>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
            
        </div>
        <div className='footer-below-left'>
          <div className='socialmedia'>
              <li><a href="#"><i class="fab fa-facebook"></i>icon1</a></li>
              <li><a href="#"><i class="fab fa-facebook"></i>icon2</a></li>
              <li><a href="#"><i class="fab fa-facebook"></i></a>icon3</li>
        </div>
        </div>
        </div>
    </div>
    

  )
}

export default Footer