import React from "react";
import "./About_Us.css";
import aboutus from "../Asset/aboutus.jpeg";
const About_Us = () => {
  return (
    <div className="flex-col justify-center items-center w-full ">
    <div className="flex pt-10 ">

    <hr style={{ border: 'none', height: '4px', background: '#05345E'}} className="xl:w-40 lg:w-32 md:w-20  w-10 mt-[15px] md:mt-[28px] "/>

    <div className="flex justify-center text-[#0B0B51]"><h1 className="sm:text-4xl text-sm pb-10 font-poppins uppercase  p-2">How We Make A Difference</h1></div>

    <hr style={{ border: 'none', height: '4px', background: '#05345E',float:'left' }} className=" xl:w-72 lg:w-56 md:w-44 w-24 mt-[15px] md:mt-[28px] " />


  </div>
    <div className="w-full flex-col items-center justify-center font-poppins">
    
      <div className="outer-box">
        <div className="row">
          <div className="column">
            <img src={aboutus} />
          </div>
          <div className="column">
            <div className="p">
              <h4>TITLE1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>
          <div className="column">
            <img src={aboutus} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="p">
              <h4>TITLE2</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>
          <div className="column">
            <img src={aboutus} />
          </div>
          <div className="column">
            <div className="p">
              <h4>TITLE2</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About_Us;
