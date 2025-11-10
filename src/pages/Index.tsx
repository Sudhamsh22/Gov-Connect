
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import DepartmentsSection from '@/components/home/DepartmentsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceHighlights />
      <DepartmentsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
