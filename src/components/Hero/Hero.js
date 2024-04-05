
import React from 'react'
import "./Hero.css"
import logo from '../Asset/logo.png'
const Hero = () => {
  return (
    <div className='xl:h-[900px] md:h-screen h-screen w-full overflow-hidden pt-[80px] '>
      <div className="text-center mb-4 flex justify-center items-center absolute z-30 w-full h-full pb-20">
        <img src={logo}  className='logo-main'/>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 lg:grid-rows-3 lg:grid-cols-4 gap-1 z-40 opacity-hero">
      <div className="grid gap-1">
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo1.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="background/photo2.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="background/photo3.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-1">
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="background/photo4.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo5.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo6.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-1">
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo7.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo8.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo9.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-1">
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo1.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo2.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo3.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-1">
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo1.jpg" alt="" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo5.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="background/photo3.jpg" alt="" />
      </div>
    </div>
    <div className="grid gap-1">
    <div>
      <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="/background/photo1.jpg" alt="" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="background/photo2.jpg" alt="" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" src="background/photo3.jpg" alt="" />
    </div>
  </div>
      </div>
    </div>
  )
}

export default Hero;