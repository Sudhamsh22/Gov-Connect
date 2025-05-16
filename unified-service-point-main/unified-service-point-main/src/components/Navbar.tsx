import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="gov-container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-gov-blue font-bold text-xl md:text-2xl">Gov</span>
              <span className="text-gov-blue-light font-bold text-xl md:text-2xl">Connect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link active">Home</Link>
            <div className="relative group">
              <button 
                className="nav-link flex items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              > 
                Services <ChevronDown size={16} className="ml-1" />   
              </button> 
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gov-neutral-100">All Services</Link>
                </div>
              </div>
            </div>
            <Link to="/communication" className="nav-link">Communication</Link>
            <Link to="/tasks" className="nav-link">Tasks</Link>
            <Link to="/documents" className="nav-link">Documents</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gov-blue">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 bg-white shadow-md">
          <Link to="/" className="block nav-link">Home</Link>
          <Link to="/services" className="block nav-link">Services</Link>
          <Link to="/communication" className="block nav-link">Communication</Link>
          <Link to="/tasks" className="block nav-link">Tasks</Link>
          <Link to="/documents" className="block nav-link">Documents</Link>
          <Link to="/dashboard" className="block nav-link">Dashboard</Link>
          <div className="mt-4 flex flex-col space-y-2 px-3">
            <Link to="/login">
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="w-full">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;