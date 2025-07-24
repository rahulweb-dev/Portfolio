"use client";

import { FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Bharathyundai',
    description: 'Fully responsive Hyundai dealership website with car showcase, lead forms, and Firebase integration.',
    link: 'https://bharathyundai.in',
  },
  {
    title: 'Saboo Nexa',
    description: 'Modern and elegant Nexa website built with React, Swiper.js, and dynamic routing.',
    link: 'https://saboonexa.in',
  },
  {
    title: 'Saboo Arena',
    description: 'Stylish Maruti Arena portal featuring car pages, enquiry forms, and high-performance optimization.',
    link: 'https://saboomaruti.in',
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
          My Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-red-500 transition">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition"
              >
                View Project <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
