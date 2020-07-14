import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='container'>
        <h1 className='section-heading'>
          <span className='green-border'></span>Featured Portfolio
        </h1>

        <div className='featured'>
          <article className='project'>
            <img
              className='project-img'
              src='../images/bootcamp-certificate.png'
              alt=''
            ></img>
            <div className='project-body'>
              <h3 className='project-title'>Developer Profile Generator </h3>
              <p className='project-desc'>
                A command-line application that dynamically generates a PDF
                profile from a GitHub username.
              </p>
              <hr className='project-line'></hr>
              <p className='project-tech'>
                JavaScript, NodeJS, Github API, HTML, CSS
              </p>
              <div className='project-buttons'>
                <Link>
                  <button className='btn btn-primary project-btn'>
                    View Portfolio
                  </button>
                </Link>

                <Link>
                  <button className='btn btn-secondary project-btn'>
                    View Resume
                  </button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
