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
              <li><a href="#" className="hover:text-secondary-light">Home</a></li>
              <li><a href="#feature-section" className="hover:text-secondary-light">Features</a></li>
              <li><a href="#pricing-section" className="hover:text-secondary-light">Pricing</a></li>
              <li><a href="#" className="hover:text-secondary-light">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary-light">Blog</a></li>
              <li><a href="#" className="hover:text-secondary-light">Tutorials</a></li>
              <li><a href="#" className="hover:text-secondary-light">FAQs</a></li>
              <li><a href="#" className="hover:text-secondary-light">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary-light">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary-light">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary-light">Data Protection</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary-light"><FaFacebookF size={24} /></a>
              <a href="#" className="hover:text-secondary-light"><FaSquareXTwitter size={24} /></a>
              <a href="#" className="hover:text-secondary-light"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-secondary-light"><FaMailBulk size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-light text-center">
          <p>&copy; 2024 The Librarium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;