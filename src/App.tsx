import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LinkedInPosts from './components/LinkedInPosts';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useIntersectionObserver } from './hooks';

export default function App() {
  useIntersectionObserver();

  useEffect(() => {
    document.title = 'Saud Al Zakwani | Digital Transformation Leader';
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <LinkedInPosts />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
