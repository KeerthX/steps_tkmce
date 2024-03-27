import React from "react";
import "./About_Us.css";
import aboutus from "../Asset/aboutus.jpeg";
const About_Us = () => {
  return (

    <div className="w-full h-full font-poppins" style={{
      backgroundImage: `linear-gradient(
        150deg,
        hsl(208deg, 90%, 19%) 0%,
        hsl(208deg, 90%, 19%) 2%,
        hsl(208deg, 90%, 19%) 5%,
        hsl(208deg, 90%, 19%) 8%,
        hsl(208deg, 90%, 19%) 13%,
        hsl(208deg, 90%, 19%) 17%,
        hsl(208deg, 90%, 19%) 23%,
        hsl(208deg, 90%, 19%) 28%,
        hsl(208deg, 90%, 19%) 34%,
        hsl(208deg, 90%, 19%) 40%,
        hsl(208deg, 90%, 19%) 46%,
        hsl(208deg, 90%, 19%) 52%,
        hsl(208deg, 90%, 19%) 58%,
        hsl(208deg, 90%, 19%) 64%,
        hsl(208deg, 90%, 19%) 71%,
        hsl(208deg, 90%, 19%) 77%,
        hsl(208deg, 90%, 19%) 83%,
        hsl(208deg, 90%, 19%) 89%,
        hsl(208deg, 90%, 19%) 95%,
        hsl(208deg, 90%, 19%) 100%
      )`
    }}>

      <div className="flex-col gap-10 p-8 ">

        <div className="sm:flex  pt-32 gap-10   p-8 ">
          <div className="sm:w-1/2 w-full ">
            <img src={aboutus} alt="about1" />
          </div>
          <div className="flex flex-col items-center justify-center sm:w-1/2 w-full p-2 text-center">
            <h4 >About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </div>
        </div>
        <div className="sm:flex gap-10  p-8 hidden ">

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
            <img src={aboutus} alt="about1" />
          </div>
        </div>
        <div className="sm:flex gap-10  p-8 md:hidden block">
          <div className="sm:w-1/2 w-full">
            <img src={aboutus} alt="about1" />
          </div>
          <div className="flex flex-col items-center justify-center sm:w-1/2 w-full p-2 text-center">

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
      </div>
    </div>
  );
};

export default About_Us;
