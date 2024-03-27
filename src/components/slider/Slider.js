import { useState, useEffect } from "react";
import "./Slider.css";


const Slider = () => {

  return (
    <div style={{
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
    <div className="flex justify-center items-center pt-10">
      <h1 className="text-4xl">Gallery</h1>
    </div>
    <section>
    <button>Pause</button>
    <article>
      <div>
        <ul>
          <li><img src="http://dummyimage.com/600x400/000000/ffffff.png" /></li>
          <li><img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li>
          <li><img src="http://dummyimage.com/600x400/000000/ffffff.png" /></li>
          <li><img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="http://dummyimage.com/600x400/000000/ffffff.png" /></li>
          <li><img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li>
          <li><img src="http://dummyimage.com/600x400/000000/ffffff.png" /></li>
          <li><img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li>
        </ul>
      </div>
    </article>
  </section>
  </div>
  );
};

export default Slider;
