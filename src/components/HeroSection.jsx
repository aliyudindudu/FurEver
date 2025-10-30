import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen pt-20 pb-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/hero.jpg')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Hero Content */}
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl font-normal text-black mb-8 leading-tight font-poppins">
            Paw-sitive vibes only — find your
            <br />
            <span className="text-black">pet's favorite products!</span>
          </h1>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Miaw miaw..."
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-800 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-white focus:border-opacity-50 transition-all duration-200 backdrop-blur-md placeholder-gray-600"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

        


        </div>
      </div>
    </section>
  );
};

export default HeroSection;