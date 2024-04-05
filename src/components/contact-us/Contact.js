import React from 'react'
import './Contact.css'
import contact from "../Asset/aboutus.jpeg"
const Contact = () => {
  return (
    <div className='contact-border p-2'>
    <div className='contact-us-banner'>
      <div className='contact-contents'>
      <h2>Contact Us </h2>
      <p>name. If the image is located in a different directory, 
        you need to provide the correct relative path or the absolute URL.</p>
      </div>
      <div className="contact-info">
      <p><strong>Email:</strong> example@example.com</p>
      <p><strong>Phone:</strong> +1234567890</p>
      <p><strong>Address:</strong> 123 Main St, City, Country</p>
    </div>
    
    </div>

    <div className='location'>
    </div>

  </div>

  )
}

export default Contact
