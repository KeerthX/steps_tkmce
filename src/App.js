
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About_Us from './components/about_us/About_Us';
import Contact from './components/contact-us/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Slider from './components/slider/Slider';
import Event from './components/events/Event';
import Navbar from './components/navbar/Navbar';





const App = () => {
  return (
    <div>

       <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" exact component={Home} />
          <Route path="/about" component={About_Us} />
           <Route path="/event" component={Event} />
           <Route path="/gallery" component={Slider} />
          <Route path="/contact" component={Contact} />
       </Routes>
       </BrowserRouter>

        
         
        
  
    

      <Home/>
      <Slider/>
      <About_Us/>
      <Event/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

