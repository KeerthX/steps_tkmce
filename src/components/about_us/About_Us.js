import React from "react";
import "./About_Us.css";
import aboutus from "../Asset/aboutus.jpeg";
const About_Us = () => {
  return (
   
    <div className=" w-full h-full   ">
  
      <div className="flex-col gap-10 p-4 ">
      <div className="sm:flex  pt-32 gap-10 ">
        <div className="sm:w-1/2 w-full">
          <img src={aboutus} alt="about1"/>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-1/2 w-full">
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
      <div className="sm:flex gap-10   ">
        
        <div className="flex flex-col items-center justify-center sm:w-1/2 w-full">
        <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium.
          </p>
          
        </div>
        <div className="sm:w-1/2 w-full">
          <img src={aboutus} alt="about1"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About_Us;
