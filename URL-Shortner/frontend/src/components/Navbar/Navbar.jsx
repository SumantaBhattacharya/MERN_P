import React, { useState } from 'react';
import "boxicons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-neutral-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
             className="w-14 h-w-14" 
             src="https://cdn-icons-png.flaticon.com/512/1017/1017466.png" alt="" />
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex gap-8 text-neutral-300">
            <a href="#features" className="hover:text-white transition duration-200">Features</a>
            <a href="#pricing" className="hover:text-white transition duration-200">Pricing</a>
            <a href="#about" className="hover:text-white transition duration-200">About</a>
          </nav>

          {/* Desktop Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-neutral-300 hover:text-white transition duration-200">Sign in</button>
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-neutral-200 transition duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <box-icon name='x' color="#d4d4d4" size="md"></box-icon>
              ) : (
                <box-icon name='menu' color="#d4d4d4" size="md"></box-icon>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <div className="border-t border-neutral-800 pt-2 mt-2">
                <button className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition duration-200">
                  Sign in
                </button>
                <button className="block w-full text-left px-3 py-2 bg-white text-black rounded-md font-semibold hover:bg-neutral-200 transition duration-200 mt-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;