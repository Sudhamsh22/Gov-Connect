import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gov-neutral-100 section-padding">
      <div className="gov-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gov-blue mb-6">
              One platform for all government services
            </h1>
            <p className="text-lg text-gov-neutral-700 mb-8">
              GovConnect brings together all departments and services in one place, 
              making government operations more efficient and accessible to citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button size="lg" className="btn-primary">
                  Explore Services <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="btn-secondary">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gov-blue rounded-full opacity-10"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gov-blue-light rounded-full opacity-10"></div>
              <img 
              src="https://i.imgur.com/qEuquUT.png" 
              alt="Government services illustration" 
              className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
