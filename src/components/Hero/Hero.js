import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Hero() {
  return (
    <section className='hero-main'>
      <div className='container'>
        <h1 className='section-heading'>Joseph Lynn</h1>
        <h3 className='section-subheading'>Full Stack Web Developer</h3>

        <p className='hero-excerpt'>
          I am a Full Stack Web Developer specializing in front-end development.
          Known for being able to bring ideas together to build out the user
          interface of an application. I write about JavaScript on{' '}
          <a
            href='https://dev.to/joelynn94'
            target='_blank'
            rel='noopener noreferrer'
            className='green-highlight'
          >
            my blog
          </a>
          . If you want to see more check out my{' '}
          <Link
            to=''
            target='_blank'
            rel='noopener noreferrer'
            className='green-highlight'
          >
            projects portfolio
          </Link>
          ,{' '}
          <Link
            to=''
            target='_blank'
            rel='noopener noreferrer'
            className='green-highlight'
          >
            online resume
          </Link>{' '}
          or{' '}
          <Link
            to=''
            target='_blank'
            rel='noopener noreferrer'
            className='green-highlight'
          >
            download my resume
          </Link>
          .
        </p>

        <div className='hero-social'>
          <a
            href='https://www.linkedin.com/in/joseph-lynn/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fab fa-linkedin'></i>
          </a>

          <a
            href='https://dev.to/joelynn94'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fab fa-dev'></i>
          </a>

          <a
            href='https://github.com/Joelynn94'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fab fa-github-square'></i>
          </a>

          <a
            href='mailto: josephlynn94@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fas fa-envelope-square'></i>
          </a>
        </div>

        <div className='hero-buttons'>
          <Link>
            <button className='btn btn-primary hero-btn'>
              <i className='fal fa-arrow-circle-right'></i>View Portfolio
            </button>
          </Link>

          <Link>
            <button className='btn btn-secondary hero-btn'>
              <i className='fal fa-file-user'></i>View Resume
            </button>
          </Link>
        </div>

        <div className='hero-secondary'>
          <img
            className='hero-img'
            src='../images/joe-with-background.jpg'
            alt='profile'
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
