import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import CTA from '../components/CTA/CTA';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <CTA />
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;
