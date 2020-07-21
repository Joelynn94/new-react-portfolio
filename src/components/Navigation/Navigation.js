import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import NavigationLogo from './NavigationLogo';
import NavigationToggle from './NavigationToggle';

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
        <NavigationMenu open={open} setOpen={setOpen} />
        {/* Navigation Toggle Button */}
        <NavigationToggle open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
}

export default Navigation;
