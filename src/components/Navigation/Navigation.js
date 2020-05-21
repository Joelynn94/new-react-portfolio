import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

function Navigation() {
  return (
    <nav className='navigation'>
      {/* Navigation Logo */}
      <div className='navigation-logo'>
        <Link to='/' className='navigation-link'>
          Joseph Lynn
        </Link>
      </div>
      {/* Navigation List */}
      <div className='navigation-list'>
        {/* Navigation Items */}
        <ul className='navigation-ul'>
          <li className='navbar-item'>
            <Link className='navbar-link' to='/'>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to='/'>
              About
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to='/'>
              Skills
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to='/'>
              Portfolio
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to='/'>
              Contact
            </Link>
          </li>
        </ul>
        {/* Navigation Toggle Button */}
        <div className='navigation-toggle'>
          <i class='far fa-bars'></i>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
