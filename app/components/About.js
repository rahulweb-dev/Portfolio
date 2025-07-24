'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className='py-20 px-6 bg-gray-950 text-white'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        {/* Profile Image */}
        <div className='relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-red-600 shadow-lg'>
          <Image
            src='/rahul.jpeg' // Replace with your image path
            alt='Rahul - Full Stack Developer'
            fill
            className='object-cover'
          />
        </div>

        {/* About Content */}
        <div className='text-center md:text-left'>
          <h2 className='text-3xl md:text-4xl font-bold mb-3'>
            Why Hire Me for Your Next Project?
          </h2>
          <h3 className='text-lg md:text-xl text-red-400 font-semibold mb-5'>
            FULL-STACK WEB DEVELOPER
          </h3>

          <p className='text-base text-gray-300 leading-relaxed mb-6 max-w-2xl'>
            Im a passionate Full Stack Developer with experience in building
            scalable web applications using technologies like <strong>React, Next.js, Node.js, MongoDB, and Firebase</strong>. I specialize in creating responsive UIs and robust backend systems. With a strong focus on performance and usability, I enjoy transforming complex problems into elegant, maintainable solutions.
          </p>

          {/* Personal Info */}
          <div className='text-sm space-y-1 mb-6'>
            <p><strong>Name:</strong> Rahul</p>
            <p><strong>Location:</strong> India</p>
            <p><strong>Birthday:</strong> August 11, 2001</p>
          </div>

          {/* Buttons */}
          <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
            <a
              href='/resume.pdf' // Update with your resume path
              download
              className='bg-red-600 hover:bg-red-700 transition text-white font-medium py-2 px-6 rounded-full'
            >
              Download CV
            </a>
            <a
              href='#projects'
              className='text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition font-medium py-2 px-6 rounded-full'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
