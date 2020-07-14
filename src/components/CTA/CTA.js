import React from 'react';
import './styles.scss';

function CTA() {
  return (
    <section className='cta'>
      <h3 className='cta-text'>
        If you are interested to get in contact with me, you can find me on
        <a
          href='https://www.linkedin.com/in/joseph-lynn'
          target='_blank'
          rel='noopener noreferrer'
          className='green-highlight'
        >
          {' '}
          LinkedIn
        </a>
        , check out my code on
        <a
          href='https://github.com/Joelynn94'
          target='_blank'
          rel='noopener noreferrer'
          className='green-highlight'
        >
          {' '}
          Github
        </a>
        , or
        <a
          href='mailto: josephlynn94@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='green-highlight'
        >
          {' '}
          email me
        </a>
        .
      </h3>
    </section>
  );
}

export default CTA;
