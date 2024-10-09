import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id='contact-section' className="bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300">Features</a></li>
              <li><a href="#" className="hover:text-green-300">Pricing</a></li>
              <li><a href="#" className="hover:text-green-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Blog</a></li>
              <li><a href="#" className="hover:text-green-300">Tutorials</a></li>
              <li><a href="#" className="hover:text-green-300">FAQs</a></li>
              <li><a href="#" className="hover:text-green-300">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-300">Data Protection</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300"><FaFacebookF size={24} /></a>
              <a href="#" className="hover:text-green-300"><FaSquareXTwitter size={24} /></a>
              <a href="#" className="hover:text-green-300"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-green-300"><FaMailBulk size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-light text-center">
          <p>&copy; 2024 Library Management App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;