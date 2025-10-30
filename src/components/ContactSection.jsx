import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isAnimating, setIsAnimating] = useState(false);

  const playBarkSound = () => {
    const audio = new Audio('/bark.mp3');
    audio.play().catch(error => {
      console.log('Error playing sound:', error);
    });
    
    // Trigger pumping animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 6000); // Animation duration 6 seconds
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form - Left Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-['Poppins']">
                Contact Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions about our products or need assistance? We'd love to hear from you! 
                Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Image - Right Side */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/contact.png"
                alt="Contact Us - Happy Pet"
                className={`w-full h-auto object-cover transform hover:scale-105 transition-all duration-500 cursor-pointer ${
                  isAnimating ? 'pump-animation' : ''
                }`}
                onClick={playBarkSound}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;