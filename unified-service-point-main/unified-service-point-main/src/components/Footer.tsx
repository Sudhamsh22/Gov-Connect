
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gov-neutral-800 text-white">
      <div className="gov-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">GovConnect</h3>
            <p className="text-gov-neutral-300 mb-4">
              The central platform for government services and inter-departmental cooperation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gov-neutral-300 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/services" className="text-gov-neutral-300 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/communication" className="text-gov-neutral-300 hover:text-white transition-colors duration-200">Communication</Link></li>
              <li><Link to="/tasks" className="text-gov-neutral-300 hover:text-white transition-colors duration-200">Tasks</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gov-neutral-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/faq" className="text-gov-neutral-300 hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/contact" className="text-gov-neutral-300 hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link to="/accessibility" className="text-gov-neutral-300 hover:text-white transition-colors duration-200">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-gov-neutral-300 not-italic">
              <p>123 Government Street</p>
              <p>Capital City, ST 12345</p>
              <p className="mt-2">Email: contact@govconnect.gov</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gov-neutral-300 text-sm">© {currentYear} GovConnect. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gov-neutral-300 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-gov-neutral-300 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
            <Link to="/cookies" className="text-gov-neutral-300 hover:text-white text-sm transition-colors duration-200">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
