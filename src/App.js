
import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Slider from './components/slider/Slider';
import Event from './components/events/Event';
import Home from './components/home/Home';
import About_Us from './components/about_us/About_Us';
import Contact from './components/contact-us/Contact';
import Gallery from './components/Gallery/Gallery';
import Itempage from './components/itempage/Itempage';
import Lenis from '@studio-freight/lenis'

const App = () => {
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/:slug" element={<Itempage />} />
      </Routes>
    </div>
  )
}

export default App


