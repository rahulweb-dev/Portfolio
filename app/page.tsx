
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Rahul Portfolio",
  description: "This is my Next.js site",
  keywords: ["nextjs", "react", "seo", "web development"],
  authors: [{ name: "Rahul Dev" }],
  openGraph: {
    title: "Rahul Portfolio",
    description: "This is my Next.js site",
    url: "https://rahulreddy416.vercel.app",
    siteName: "Rahul Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Portfolio",
    description: "This is my Next.js site",
    images: [
      "",
    ],
  },
};
export default function Home() {
  return (
    <>
    
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
