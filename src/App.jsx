// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero_AK';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
