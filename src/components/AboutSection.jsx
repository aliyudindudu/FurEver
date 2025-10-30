import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="order-2 lg:order-1">
          <img 
            src="/about.jpg" 
            alt="Happy pets with FurEver" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2 space-y-6 px-8 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins">
            About Us
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-poppins">
              FurEver is a place where comfort and style meet to fulfill all your pet's needs. We 
              believe every animal deserves the best care, with high-quality products and 
              elegant designs. From premium food to stylish accessories, FurEver is here to make 
              every moment with your beloved pet feel more special.
            </p>
            
            <div className="flex items-start space-x-3 mt-6">
             
              <p className="text-lg text-gray-700 font-poppins">
                💫 Because love for animals is something that lasts FurEver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;