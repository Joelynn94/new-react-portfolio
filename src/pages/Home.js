import React from "react";
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'


function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
        <Skills />
      </div>

    </main>
  );
}

export default Home;
