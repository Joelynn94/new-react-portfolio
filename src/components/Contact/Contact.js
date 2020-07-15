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
          <div className='form-control'>
            <label className='form-label' htmlFor='name'>
              Name
            </label>
            <input type='text' className='form-input' id='name' />
            <i className='fal fa-user contact-icon'></i>
          </div>
          <div className='form-control'>
            <label className='form-label' htmlFor='email'>
              Email
            </label>
            <input type='text' className='form-input' id='email' />
            <i className='fal fa-envelope contact-icon'></i>
          </div>
          <div className='form-control'>
            <label className='form-label' htmlFor='message'>
              Message
            </label>
            <textarea
              type='text'
              className='form-textarea'
              id='message'
            ></textarea>
            <i className='fal fa-comment-alt-lines contact-icon'></i>
          </div>

          <button className='btn btn-secondary submit-btn'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
