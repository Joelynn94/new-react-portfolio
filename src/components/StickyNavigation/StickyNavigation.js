import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function StickyNavigation() {
  return (
    <nav className='sticky-navigation'>
      {/* Navigation ul */}
      <ul className='navigation-ul'>
        <li className='navigation-item'>
          <Link className='navigation-link' to='#'>
            <i className='fal fa-laptop-code navigation-icon'></i>
            <span>Portfolio</span>
          </Link>
        </li>
        <li className='navigation-item'>
          <Link className='navigation-link' to='#'>
            <i className='fal fa-code navigation-icon'></i>
            <span>Skills</span>
          </Link>
        </li>
        <li className='navigation-item'>
          <Link className='navigation-link' to='#'>
            <i className='fal fa-address-card navigation-icon'></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default StickyNavigation;
