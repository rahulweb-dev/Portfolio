'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/rahul.jpeg" // Make sure this image is in your public folder
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-red-500/70" />
      </div>

      {/* Content */}
      <div className="z-10 text-center" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Hi, I’m Rahul
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light" data-aos="fade-up" data-aos-delay="200">
          Full-stack Developer
        </p>
        <a
          href="#projects"
          className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-110 hover:shadow-indigo-500/50 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          View My Work
        </a>
      </div>

      {/* Optional Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce z-10" data-aos="fade-up" data-aos-delay="600">
        <span className="text-lg">↓ Scroll Down</span>
      </div>
    </section>
  );
}
