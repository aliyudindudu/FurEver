import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Copyright Section */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4" style={{fontFamily: 'serif'}}>
              FurEver
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              © FurEver 2025 | Your Luxury Pet Needs.
            </p>
            <p className="text-gray-300 text-sm">
              Term of Service | Privacy Policy
            </p>
          </div>

          {/* Products Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">All products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pet food</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pet bed</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">About us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About us</a></li>
            </ul>
          </div>

          {/* Contacts Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Contacts</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Amazon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">E-mail</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Telephone</a></li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Get in touch</h3>
            <p className="text-gray-300 text-sm">
              Question or feedback?<br />
              We'd love to hear from you
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;