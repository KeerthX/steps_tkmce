import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-links">
          <div className="footer-links-div">
            <h4>STEPS TKMCE</h4>
            <a href="/employer">
              <p>This CSS code will create a linear gradient that starts with a dark blue 
                color #000080 at the top and transitions to black #000 at the bottom. Make 
              </p> 
            </a>
          </div>
         
         <div className="footer-right">
          <div className="footer-links-div-right">
            <h4>ABOUT</h4>
            <a href="/employer">
              <p>about</p> 
            </a>
        </div>
        <div className="footer-links-div-right">
            <h4>TEAM</h4>
            <a href="/employer">
              <p>team</p> 
            </a>
        </div>
        <div className="footer-links-div-right">
            <h4>CONTACT</h4>
            <a href="/employer">
              <p>contact</p> 
            </a>
        </div>
        </div>

        <hr></hr>
        <div className="footer-below">
          <div className="footer-copyright">
            <p className="copy-color">
              Copyright &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
          <div className="socialmedia">
              <a href="https://www.facebook.com/yourpage" target="_blank">
                icon1<i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/yourpage" target="_blank">
                icon2<i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/yourpage" target="_blank">
                icon3<i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/yourpage" target="_blank">
                icon4<i class="fab fa-linkedin"></i>
              </a>
            </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Footer;
