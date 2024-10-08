import React, { useState } from 'react';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa';

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
            <FaBook className="mr-2" size={24} />
            <span className="font-bold text-xl">LibraryManager</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-green-200">Home</a>
            <a href="#" className="hover:text-green-200">Features</a>
            <a href="#" className="hover:text-green-200">Pricing</a>
            <a href="#" className="hover:text-green-200">Resources</a>
            <a href="#" className="hover:text-green-200">Contact</a>
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