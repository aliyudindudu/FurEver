import React, { useState, useEffect } from 'react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const petPhotos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=500&fit=crop",
      alt: "Happy Golden Retriever"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=500&fit=crop",
      alt: "Cute Cat"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=500&fit=crop",
      alt: "Playful Dog"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=500&fit=crop",
      alt: "Adorable Puppy"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=500&fit=crop",
      alt: "Beautiful Cat"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=500&fit=crop",
      alt: "Happy Pet"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === petPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? petPhotos.length - 1 : prevIndex - 1
    );
  };

  const getVisiblePhotos = () => {
    // For mobile: show only 1 photo, for desktop: show 3 photos
    const photosToShow = isMobile ? 1 : 3;
    const visible = [];
    
    for (let i = 0; i < photosToShow; i++) {
      const index = (currentIndex + i) % petPhotos.length;
      visible.push(petPhotos[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-4">
            Our Happy Pets
          </h2>
          <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
            Meet some of the adorable pets who trust FurEver for their daily needs and happiness
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Photo Gallery */}
          <div className="flex justify-center items-center md:space-x-8 lg:space-x-12">
            {getVisiblePhotos().map((photo, index) => {
              const rotations = ['rotate-6', '-rotate-3', 'rotate-2'];
              const zIndexes = ['z-10', 'z-20', 'z-10'];
              const scales = ['scale-90', 'scale-100', 'scale-90'];
              const shadows = ['shadow-xl', 'shadow-2xl', 'shadow-xl'];
              
              // For mobile, use center styling (no rotation, full scale)
              const mobileRotation = 'rotate-0';
              const mobileScale = 'scale-100';
              const mobileZIndex = 'z-20';
              const mobileShadow = 'shadow-2xl';
              
              return (
                <div
                  key={`${photo.id}-${currentIndex}`}
                  className={`relative transition-all duration-500 transform ${
                    isMobile 
                      ? `${mobileRotation} ${mobileScale} ${mobileZIndex}` 
                      : `${rotations[index]} ${scales[index]} ${zIndexes[index]}`
                  }`}
                >
                  {/* Photo Frame */}
                  <div className={`bg-white p-4 pb-8 ${
                    isMobile ? mobileShadow : shadows[index]
                  } hover:shadow-3xl transition-shadow duration-300`}>
                    {/* Photo */}
                    <div className="relative overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-64 h-80 md:w-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    
                    {/* Photo Caption */}
                    <div className="mt-3 text-center">
                      <p className="text-sm text-gray-600 font-poppins font-medium">
                        {photo.alt}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-300 rounded-full opacity-60"></div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: petPhotos.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 font-poppins italic">
            "Every pet deserves to be happy and loved"
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;