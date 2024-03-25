import React from "react";
import "./About_Us.css";
import aboutus from "../Asset/aboutus.jpeg";
const About_Us = () => {
  return (
   
    <div className="container p-10">
      <h1>About Us</h1>
      <div className="outer-box">
      <div className="row">
        <div className="column">
          <img src={aboutus} alt="about1"/>
        </div>
        <div className="column">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium.
          </p>
        </div>
        <div className="column">
          <img src={aboutus} alt="about2"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About_Us;
