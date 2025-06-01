import React from 'react';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 border-t border-gray-700 pt-12">
          
          {/* Get Started */}
          <div>
            <h3 className="font-semibold text-gray-400 uppercase mb-6 tracking-widest text-sm">Get Started</h3>
            <ul>
              {['Start a Fundraise', 'Investor Signup', 'Account Login'].map((text) => (
                <li key={text} className="mb-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {text}
                    <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 rounded"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Browse */}
          <div>
            <h3 className="font-semibold text-gray-400 uppercase mb-6 tracking-widest text-sm">Browse</h3>
            <ul>
              {['Trending', 'Recently Funded', 'New & Noteworthy'].map((text) => (
                <li key={text} className="mb-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {text}
                    <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 rounded"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-400 uppercase mb-6 tracking-widest text-sm">Resources</h3>
            <ul>
              {['FAQ', 'Guidelines', 'Contact Us'].map((text) => (
                <li key={text} className="mb-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {text}
                    <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 rounded"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-gray-400 uppercase mb-6 tracking-widest text-sm">Follow Us</h3>
            <div className="flex space-x-5">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <img src={twitter} alt="Twitter" className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <button
          aria-label="Open chat"
          className="fixed bottom-6 right-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 focus:outline-none"
        >
          💬
        </button>
      </div>
    </footer>
  );
};

export default Footer;
