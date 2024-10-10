import React, { useState } from 'react';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-700 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} className='mr-2 w-12' alt="Logo" />
            <span className="font-bold text-xl text-white">The Librarium</span>
          </div>
          <div className="hidden md:flex align-middle items-center space-x-4">
            <a href="#home-section" className="text-white hover:text-secondary-light">Home</a>
            <a href="#feature-section" className="text-white hover:text-secondary-light">Features</a>
            <a href="#pricing-section" className="text-white hover:text-secondary-light">Pricing</a>
            <a href="#testimonial-section" className="text-white hover:text-secondary-light">Testimonials</a>
            <a href="#contact-section" className="text-white hover:text-secondary-light">Contact</a>
            <Link to="/register" className='border-2 border-primary-main rounded-full px-4 py-2 text-white hover:bg-primary-main '>Get Started</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#home-section" className="block py-2 px-4 text-white hover:text-secondary-light">Home</a>
          <a href="#feature-section" className="block py-2 px-4 text-white hover:text-secondary-light">Features</a>
          <a href="#pricing-section" className="block py-2 px-4 text-white hover:text-secondary-light">Pricing</a>
          <a href="#resources-section" className="block py-2 px-4 text-white hover:text-secondary-light">Resources</a>
          <a href="#contact-section" className="block py-2 px-4 text-white hover:text-secondary-light">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
