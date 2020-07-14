import React from 'react';
// import { Link } from "react-router-dom";

import './styles.scss';

function About() {
  return (
    <section className='about' id='aboutMe'>
      <div className='container'>
        <h1 className='section-heading'>
          <span className='green-border'></span>About Me
        </h1>
        <p className='about-excerpt'>
          Recently earned a certificate in Full Stack Development from Case
          Western Reserve University, with newly developed skills in JavaScript,
          mobile-first responsive design, Node.js, JQuery, API’s, problem
          solving and much more. With every project, my aim is to give users a
          great experience - ensuring everything works as intended. Excited to
          leverage my skill set as part of a goal-oriented and results-driven
          team.
        </p>
        <img
          className='about-img'
          src='../images/bootcamp-certificate.png'
          alt='screenshot of my web development certificate'
        ></img>
      </div>
    </section>
  );
}

export default About;
