
import React from 'react';
import Footer from './Footer';
import Cnavbar from './Cnavbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Clayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Cnavbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Clayout;
