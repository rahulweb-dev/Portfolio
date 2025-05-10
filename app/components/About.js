'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950 text-white">
<div className="bg-gray-900 text-white py-20 px-6 md:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    {/* Left Side (Image) */}
    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-red-600 overflow-hidden mb-8 md:mb-0">
      <img
        src="/rahul.jpeg" // Replace with your image path
        alt="Profile Picture"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Right Side (Text Content) */}
    <div className="md:ml-12">
      <h2 className="text-3xl font-bold mb-4">Why hire me for your next project?</h2>
      <h3 className="text-xl font-medium mb-6">UI / UX Designer & Web Developer</h3>
      <p className="text-base mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="text-sm">
        <p><strong>Name:</strong> Roberto Dos</p>
        <p><strong>Location:</strong> London, UK</p>
        <p><strong>Birthday:</strong> 14 August, 1990</p>
      </div>
      <div className="mt-6">
        <a href="#" className="bg-red-600 text-white py-2 px-6 rounded mr-4">Download CV</a>
        <a href="#" className="text-red-600 py-2 px-6 border border-red-600 rounded">Learn More</a>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}
