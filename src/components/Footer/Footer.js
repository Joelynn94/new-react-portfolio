import React from 'react';

import './styles.scss';

function Footer() {
  return (
    <section className='footer'>
      <div className='container'>
        <h3 className='footer-title'>Follow Me</h3>
        <div className='footer-social'>
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
        </div>
        <p className='footer-copy'>Designed and Developed by Joseph Lynn</p>
      </div>
    </section>
  );
}

export default Footer;
