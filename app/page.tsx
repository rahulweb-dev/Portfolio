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
        <title>My Portfolio</title>
      </Head>
      <main className="bg-black text-gray-900">
        <Hero />
        <About/>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
