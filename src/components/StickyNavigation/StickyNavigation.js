import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function StickyNavigation() {
  return (
    <nav className='sticky-navigation'>
      {/* Navigation List */}
      <div className='navigation-list'>
        {/* Navigation Items */}
        <ul className='navigation-ul'>
          <li className='navigation-item'>
            <Link className='navigation-link' to='/'>
              <div className='navigation-icon'>
                <i className='fal fa-laptop-code'></i>
                <p>Portfolio</p>
              </div>
            </Link>
          </li>
          <li className='navigation-item'>
            <Link className='navigation-link' to='/'>
              <div className='navigation-icon'>
                <i className='fal fa-code'></i>
                <p>Skills</p>
              </div>
            </Link>
          </li>
          <li className='navigation-item'>
            <Link className='navigation-link' to='/'>
              <div className='navigation-icon'>
                <i className='fal fa-address-card'></i>
                <p>Contact</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default StickyNavigation;
