import React, { useState } from 'react';
import NavigationItem from './NavigationItem';
import NavigationLogo from './NavigationLogo';

import './styles.scss';

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='navigation'>
      {/* Navigation Logo */}
      <NavigationLogo logo='JL' />
      {/* Navigation List */}
      <div className='navigation-list'>
        {/* Navigation Items */}
        <ul className='navigation-ul'>
          <NavigationItem item='Home' />
          <NavigationItem item='About' />
          <NavigationItem item='Skills' />
          <NavigationItem item='Portfolio' />
          <NavigationItem item='Contact' />
        </ul>
        {/* Navigation Toggle Button */}
        <div className='navigation-toggle' onClick={() => setOpen(!open)}>
          <i className='far fa-bars'></i>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
