import React from "react";
import "./About_Us.css";
import aboutus from "../Asset/aboutus.jpeg";
const About_Us = () => {
  return (
    <div className="container">
      <h1>How We Make A Difference</h1>
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
  );
};

export default About_Us;
