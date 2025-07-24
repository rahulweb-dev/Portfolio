import Head from 'next/head'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Rahul Reddy | Full Stack Developer Portfolio</title>
        <meta name="title" content="Rahul Reddy | Full Stack Developer Portfolio" />
        <meta name="description" content="Rahul Reddy is a passionate web developer skilled in React, Next.js, and building modern UIs. Explore my projects, skills, and contact info." />
        <meta name="keywords" content="Rahul Reddy, Full Stack Developer, Web Developer, Portfolio, React Developer, Next.js, JavaScript, Hyderabad" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rahul Reddy" />
        <link rel="canonical" href="https://rahulreddy11.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rahulreddy11.vercel.app/" />
        <meta property="og:title" content="Rahul Reddy | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Rahul Reddy is a passionate web developer skilled in React, Next.js, and building modern UIs. Explore my projects, skills, and contact info." />
        <meta property="og:image" content="https://rahulreddy11.vercel.app/preview.jpg" /> {/* Replace with actual image */}

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rahulreddy11.vercel.app/" />
        <meta name="twitter:title" content="Rahul Reddy | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Rahul Reddy is a passionate web developer skilled in React, Next.js, and building modern UIs. Explore my projects, skills, and contact info." />
        <meta name="twitter:image" content="https://rahulreddy11.vercel.app/preview.jpg" /> {/* Replace with actual image */}
      </Head>

      <main className="bg-black text-gray-900">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
