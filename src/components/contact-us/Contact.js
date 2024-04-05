import React from 'react'
import './Contact.css'
import contact from "../Asset/aboutus.jpeg"
const Contact = () => {
  return (
    <div className='contact-border p-2 font-poppins'>
    
    <div className='contact-us-banner md:flex block' >
    
      <div className='contact-contents flex flex-col h-full w-full justify-center items-center'>
    
      <div className=' flex flex-col items-center justify-center h-full w-full pt-10'>
      <h2 className='font-bold text-5xl '>Contact Us </h2>
      <p className='flex '><span className='font-bold '>Email</span>:<p>stepstkmce@gmail.com </p></p>
      <p className='flex '><span className='font-bold '>Address</span>:<p>TKM College of Engineering, Kollam. </p></p>
      <p className='flex '><span className='font-bold '>Phone</span>:<p>+919447710102</p></p>
      
      </div>

      </div>
      <div className='flex justify-center items-center md:pr-10 p-2'>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.6269991262534!2d76.62937717488266!3d8.914225091142598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3036020df5%3A0xc3c1007e5232dc27!2sTKM%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1712309751735!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
     
    </div>

  </div>

  )
}

export default Contact
