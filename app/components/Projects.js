"use client";

import { FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  { title: 'Bharathyundai', description: 'A cool web app that solves real problems with a clean UI.', link: 'https://bharathyundai.in' },
  { title: 'saboo-nexa', description: 'An awesome website built with React and Tailwind.', link: 'https://saboonexa.in' },
  { title: 'Saboo-Arena', description: 'A beautiful design concept for startups.', link: 'https://saboomaruti.in' },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">My Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="relative bg-gradient-to-r from-indigo-300 to-pink-600 rounded-3xl shadow-xl p-6 overflow-hidden group transform transition duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 to-pink-400 opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-5">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transform hover:scale-105 transition"
                >
                  View Project <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
