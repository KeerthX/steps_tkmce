import React from 'react'
import About_Us from './components/about_us/About_Us';
import Contact from './components/contact-us/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Slider from './components/slider/Slider';
import Event from './components/events/Event';

const Pages = () => {
  return (
    <div>
       <Home/>
      <Slider/>
      <About_Us/>
      <Event/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Pages
