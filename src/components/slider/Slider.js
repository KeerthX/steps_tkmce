import { useState, useEffect } from "react";
import "./Slider.css";


const Slider = () => {

  return (
    <div className="bg-white">
    <div className="flex pt-10 w-full ">

    <hr style={{ border: 'none', height: '4px', background: '#05345E', marginTop: '25px'}} className="xl:w-40 lg:w-32 md:w-20  w-10" />

    <div className="flex justify-center"><h1 className="text-4xl pb-10 font-poppins uppercase p-2 text-[#0B0B51]">Gallery</h1></div>

    <hr style={{ border: 'none', height: '4px', background: '#05345E', marginTop:'25px',float:'left' }} className=" xl:w-72 lg:w-56 md:w-44 w-32 " />


  </div>
      <section>

        <article>
          <div>
            <ul>
              <li><img src="/background/photo1.jpg" className="h-[400px] w-[600px]" /></li>
              <li><img src="/background/photo2.jpg" className="h-[400px] w-[600px]" /></li>
              <li><img src="/background/photo3.jpg" className="h-[400px] w-[600px]"  /></li>
              <li><img src="/background/photo4.jpg" className="h-[400px] w-[600px]"  /></li>
            </ul>
          </div>
          <div>
            <ul>
            <li><img src="/background/photo1.jpg" className="h-[400px] w-[600px]"  /></li>
            <li><img src="/background/photo2.jpg" className="h-[400px] w-[600px]"  /></li>
            <li><img src="/background/photo3.jpg" className="h-[400px] w-[600px]"  /></li>
            <li><img src="/background/photo4.jpg" className="h-[400px] w-[600px]"  /></li>

            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Slider;