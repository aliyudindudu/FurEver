import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo - centered between left edge and navigation menu */}
          <div className="absolute left-1/4 transform -translate-x-1/2 hidden md:block">
            <h1 className="text-2xl font-bold text-gold-soft font-inter tracking-wide">
              FurEver
            </h1>
          </div>
          
          {/* Mobile Logo - positioned normally on mobile */}
          <div className="flex-shrink-0 md:hidden">
            <h1 className="text-2xl font-bold text-gold-soft font-inter tracking-wide">
              FurEver
            </h1>
          </div>
          
          {/* Desktop Navigation Menu - centered */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#products"
              className="text-gray-700 hover:text-gold-soft px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Products
            </a>
            <a
              href="#category"
              className="text-gray-700 hover:text-gold-soft px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Category
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gold-soft px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gold-soft px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="#cart"
              className="text-gray-700 hover:text-gold-soft px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Cart
            </a>
          </div>

          {/* Mobile menu button - positioned on the right */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gold-soft p-2 focus:outline-none focus:ring-2 focus:ring-gold-soft focus:ring-opacity-50 rounded-md transition-all duration-200"
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            <a
              href="#products"
              onClick={toggleMobileMenu}
              className="block text-gray-700 hover:text-gold-soft hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
            >
              Products
            </a>
            <a
              href="#category"
              onClick={toggleMobileMenu}
              className="block text-gray-700 hover:text-gold-soft hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
            >
              Category
            </a>
            <a
              href="#about"
              onClick={toggleMobileMenu}
              className="block text-gray-700 hover:text-gold-soft hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={toggleMobileMenu}
              className="block text-gray-700 hover:text-gold-soft hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
            >
              Contact
            </a>
            <a
              href="#cart"
              onClick={toggleMobileMenu}
              className="block text-gray-700 hover:text-gold-soft hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
            >
              Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;