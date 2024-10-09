import React, { useState } from 'react';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
           
            <img src={logo} className='mr-2 w-12' alt="Logo" />
            <span className="font-bold  text-xl"> The Librarium</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#home-section" className="hover:text-secondary-light">Home</a>
            <a href="#feature-section" className="hover:text-secondary-light">Features</a>
            <a href="#pricing-section" className="hover:text-secondary-light">Pricing</a>
            <a href="#testimonial-section" className="hover:text-secondary-light">Testimonials</a>
            <a href="#contact-section" className="hover:text-secondary-light">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Home</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Features</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Pricing</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Resources</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;