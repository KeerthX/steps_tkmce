import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to toggle overflow property of body
    const toggleBodyOverflow = () => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    // Call the function when isOpen changes
    toggleBodyOverflow();

    // Cleanup function to revert overflow property when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };
  return (
    <div className='w-full h-full' >
      <div className="navbar bg-[#05345E] ">
      <div className="navbar-container flex justify-center items-center ">
        <div className='logo'>
        <Link to="/" className="navbar-logo">
          Logo
        </Link>
        </div>
        
        <div className="hidden md:flex md:justify-center md:items-center">
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
        <div className='md:hidden block'>
        {isOpen ? (
          <div onClick={() => setIsOpen(!isOpen)}>
            <IoCloseSharp className='text-3xl cursor-pointer' />
          </div>
        ) : (
          <div onClick={() => setIsOpen(!isOpen)}>
            <RiMenu3Fill className='text-3xl cursor-pointer' />
          </div>
        )}
      </div>
      </div>
      
      

    </div>
    {isOpen && (
      <div
        className={`fixed inset-0 w-full bg-[#232323] z-50  opacity-95 backdrop-blur-3xl menu transition duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ overflowY: 'auto' }}
      >
        <ul className='flex flex-col pl-4 pt-10 list-none text-xl gap-10 z-50  h-full justify-center items-center opacity-100 text-black'>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/gallery" onClick={handleLinkClick}>
            Gallery
          </Link>
          <Link to="/events" onClick={handleLinkClick}>
            Events
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </ul>
      </div>
    )}
    </div>

  )
}

export default Navbar