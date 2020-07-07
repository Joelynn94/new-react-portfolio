import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

function Navigation() {
  return (
    <nav className='navigation'>
      {/* Navigation Logo */}
      <div className='navigation-logo'>
        <Link to='/' className='navigation-link'>
          JL
        </Link>
      </div>
      {/* Navigation List */}
      <div className='navigation-list'>
        {/* Navigation Items */}
        <ul className='navigation-ul'>
          <li className='navigation-item'>
            <Link className='navigation-link' to='/'>
              Home
            </Link>
          </li>
          <li className='navigation-item'>
            <Link className='navigation-link' to='/'>
              About
            </Link>
          </li>
          <li className='navigation-item'>
            <Link className='navigation-link' to='/'>
              Skills
            </Link>
          </li>
          <li className='navigation-item'>
            <Link className='navigation-link' to='/'>
              Portfolio
            </Link>
          </li>
          <li className='navigation-item'>
            <Link className='navigation-link' to='/'>
              Contact
            </Link>
          </li>
        </ul>
        {/* Navigation Toggle Button */}
        <div className='navigation-toggle'>
          <i className='far fa-bars'></i>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
