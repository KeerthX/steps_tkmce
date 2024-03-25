
import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Slider from './components/slider/Slider';
import Event from './components/events/Event';
import Home from './components/home/Home';
import About_Us from './components/about_us/About_Us';
import Contact from './components/contact-us/Contact';


const App = () => {
  return (
    <div>


      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact"  element={<Contact />}/>
      </Routes>




    </div>
  )
}

export default App


