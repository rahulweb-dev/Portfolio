"use client";

import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-black via-gray-300 to-black text-white py-14 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Get in Touch Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold uppercase mb-4 tracking-wider">Get in Touch</h2>
          <p className="text-xl mb-8 italic">Let's Work Together ✨</p>

          {/* Phone Section */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FaPhone className="text-2xl animate-pulse" />
            <span className="text-xl font-semibold">9381492161</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="transform hover:scale-125 transition duration-300" aria-label="Email">
              <FaEnvelope className="text-3xl" />
            </a>
            <a href="#" className="transform hover:scale-125 transition duration-300" aria-label="LinkedIn">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="#" className="transform hover:scale-125 transition duration-300" aria-label="Instagram">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#" className="transform hover:scale-125 transition duration-300" aria-label="Dribbble">
              <FaDribbble className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/30 pt-6">
          <span className="text-lg font-bold mb-4 md:mb-0 tracking-wider hover:underline underline-offset-4 transition">
            RAHUL
          </span>
          <span className="text-lg uppercase tracking-wide">Portfolio 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
