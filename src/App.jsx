import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
