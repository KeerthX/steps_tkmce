import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    
      <div className="navbar">
      <div className="navbar-container">
        <div className='logo'>
        <Link to="/" className="navbar-logo">
          Logo
        </Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/gallery" className="navbar-link">
          Gallery
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/events" className="navbar-link">
            Events
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </div>
    

    </div>
  )
}

export default Navbar
