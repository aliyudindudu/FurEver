import React, { useState } from 'react';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Accessories', 'Pet Bed', 'Pet Food'];

  const products = [
    // Accessories (8 products)
    {
      id: 1,
      name: 'Premium leather dog & cat collars',
      price: '$12.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Stylish pet harness',
      price: '$18.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Pet ID tags',
      price: '$8.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Pet leash premium',
      price: '$15.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Pet bow tie',
      price: '$9.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Pet bandana',
      price: '$7.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 7,
      name: 'Pet carrier bag',
      price: '$35.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 8,
      name: 'Pet water bottle',
      price: '$12.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop&crop=center'
    },
    
    // Pet Bed (8 products)
    {
      id: 9,
      name: 'Cozy pet bed small',
      price: '$25.99',
      category: 'Pet Bed',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 10,
      name: 'Luxury pet bed large',
      price: '$45.99',
      category: 'Pet Bed',
      image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 11,
      name: 'Orthopedic pet bed',
      price: '$55.99',
      category: 'Pet Bed',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 12,
      name: 'Heated pet bed',
      price: '$65.99',
      category: 'Pet Bed',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 13,
      name: 'Waterproof pet bed',
      price: '$35.99',
      category: 'Pet Bed',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 14,
      name: 'Memory foam pet bed',
      price: '$49.99',
      category: 'Pet Bed',
      image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 15,
      name: 'Portable pet bed',
      price: '$29.99',
      category: 'Pet Bed',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 16,
      name: 'Designer pet bed',
      price: '$75.99',
      category: 'Pet Bed',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=center'
    },
    
    // Pet Food (8 products)
    {
      id: 17,
      name: 'Premium dry dog food',
      price: '$22.99',
      category: 'Pet Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 18,
      name: 'Organic cat food',
      price: '$19.99',
      category: 'Pet Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 19,
      name: 'Grain-free pet food',
      price: '$28.99',
      category: 'Pet Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 20,
      name: 'Wet dog food cans',
      price: '$15.99',
      category: 'Pet Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 21,
      name: 'Puppy food formula',
      price: '$24.99',
      category: 'Pet Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 22,
      name: 'Senior pet food',
      price: '$26.99',
      category: 'Pet Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 23,
      name: 'Pet treats variety pack',
      price: '$12.99',
      category: 'Pet Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center'
    },
    {
      id: 24,
      name: 'Raw pet food frozen',
      price: '$32.99',
      category: 'Pet Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-full p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {activeCategory === 'All' ? 'All Products' : activeCategory}
            </h2>
            <p className="text-gray-600">Showing {filteredProducts.length} products</p>
          </div>
          <button className="text-gray-700 hover:text-gray-900 underline font-medium transition-colors duration-200">
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  {product.price}
                </p>
                
                {/* Add to Cart Button */}
                <button className="w-full bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;