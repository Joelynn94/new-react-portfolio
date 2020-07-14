import React from "react";
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import CTA from '../components/CTA/CTA'


function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <CTA />
      </div>

    </main>
  );
}

export default Home;
