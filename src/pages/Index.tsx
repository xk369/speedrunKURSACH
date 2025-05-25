
import React from 'react';
import { CategorySelection } from '@/components/CategorySelection';
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CategorySelection />
    </div>
  );
};

export default Index;
