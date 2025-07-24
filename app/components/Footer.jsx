"use client";

import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-wider text-white drop-shadow">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-300 italic">Open to Freelance, Full-time & Collaborations ✨</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-10">
          <div className="flex items-center space-x-3 text-lg">
            <FaPhone className="text-2xl text-green-400 animate-pulse" />
            <span className="font-semibold tracking-wide">+91 93814 92161</span>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <FaEnvelope className="text-2xl text-blue-400" />
            <span className="font-semibold tracking-wide">rahulwebdeveloper12@gmail.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 text-white text-3xl mb-12">
          <a href="#" className="hover:text-blue-500 transition-transform transform hover:scale-125" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="#" className="hover:text-blue-400 transition-transform transform hover:scale-125" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-pink-500 transition-transform transform hover:scale-125" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300 transition-transform transform hover:scale-125" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <span className="text-md font-bold tracking-wider text-white hover:underline underline-offset-4">
            © {new Date().getFullYear()} RAHUL
          </span>
          <span className="text-sm tracking-wide mt-2 md:mt-0 text-gray-400">
            Built with ❤️ using Nextjs & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
