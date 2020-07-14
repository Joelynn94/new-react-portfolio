import React from 'react';

import './styles.scss';

function Contact() {
  return (
    <section className='contact'>
      <div className='container'>
        <h1 className='section-heading'>
          <span className='green-border'></span>Contact Me
        </h1>
        <form className='form' id='form'>
          <div class='form-control'>
            <label for='name'>Name</label>
            <input
              type='text'
              className='input-with-icon'
              id='name'
              placeholder='Enter a name'
            />
            <i class='fal fa-user'></i>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
