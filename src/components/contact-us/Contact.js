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
    <div className="contact-us-container">
    <div className="contact-form">
      <h2>Send us a message</h2>
      <form action="#" method="POST">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
  </div>

  )
}

export default Contact
