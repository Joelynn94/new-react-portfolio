import React from 'react';

import './styles.scss';

function Portfolio() {
  return (
    <section className='portfolio' id="#featured-portfolio">
      <div className='container'>
        <h1 className='section-heading'>
          <span className='green-border'></span>Featured Portfolio
        </h1>

        <div className='featured'>
          <article className='project'>
            <img
              className='project-img'
              src='../images/developer-profile.png'
              alt=''
            ></img>
            <div className='project-body'>
              <h3 className='project-title'>Developer Profile Generator</h3>
              <p className='project-desc'>
                A command-line application that dynamically generates a PDF
                profile from a GitHub username.
              </p>
              <hr className='project-line'></hr>
              <p className='project-tech'>
                JavaScript, NodeJS, Github API, HTML, CSS
              </p>
              <div className='project-buttons'>
                <a
                  href='https://joelynn94.github.io/dev-profile-generator/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-primary project-btn'>
                    View Project
                  </button>
                </a>

                <a
                  href='https://github.com/Joelynn94/dev-profile-generator'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-secondary project-btn'>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </article>

          <article className='project'>
            <img
              className='project-img'
              src='../images/team-template-engine.png'
              alt=''
            ></img>
            <div className='project-body'>
              <h3 className='project-title'>Team Template Engine</h3>
              <p className='project-desc'>
                A command line application generator for a software engineering
                team. The application prompts the user for information about the
                team manager and then information about the team members. Once
                you're done adding memebers, an HTML file will generate the
                team.
              </p>
              <hr className='project-line'></hr>
              <p className='project-tech'>
                Node CLI, TDD with Jest, JavaScript, HTML, CSS
              </p>
              <div className='project-buttons'>
                <a
                  href='https://github.com/Joelynn94/team-template-engine'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-primary project-btn'>
                    View Project
                  </button>
                </a>

                <a
                  href='https://github.com/Joelynn94/team-template-engine'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-secondary project-btn'>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </article>

          <article className='project'>
            <img
              className='project-img'
              src='../images/budget-tracker.png'
              alt=''
            ></img>
            <div className='project-body'>
              <h3 className='project-title'>Budget Tracker</h3>
              <p className='project-desc'>
                A user can add expenses and deposits to their budget with or
                without a connection. When entering transactions offline, they
                should populate the total when brought back online.
              </p>
              <hr className='project-line'></hr>
              <p className='project-tech'>
                PWA, JavaScript, Express, MongoDB, Mongoose ORM, MVC, HTML, CSS
              </p>
              <div className='project-buttons'>
                <a
                  href='https://sparky-budget-tracker.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-primary project-btn'>
                    View Project
                  </button>
                </a>

                <a
                  href='https://github.com/Joelynn94/budget-tracker'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-secondary project-btn'>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </article>

          <article className='project'>
            <img
              className='project-img'
              src='../images/weather-dashboard.png'
              alt=''
            ></img>
            <div className='project-body'>
              <h3 className='project-title'>Weather Dashboard</h3>
              <p className='project-desc'>
                A weather dashboard with search functionality to find current
                weather conditions and the future weather outlook for multiple
                cities.
              </p>
              <hr className='project-line'></hr>
              <p className='project-tech'>
                JavaScript, OpenWeather API, HTML, CSS
              </p>
              <div className='project-buttons'>
                <a
                  href='https://joelynn94.github.io/weather-dashboard/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-primary project-btn'>
                    View Project
                  </button>
                </a>

                <a
                  href='https://github.com/Joelynn94/weather-dashboard'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-secondary project-btn'>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
