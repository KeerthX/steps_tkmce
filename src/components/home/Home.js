import React from 'react'

import Slider from '../slider/Slider';
import About_Us from '../about_us/About_Us';
import Hero from '../Hero/Hero';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Slider />
      <About_Us />
    </div>
  )
}

export default Home
