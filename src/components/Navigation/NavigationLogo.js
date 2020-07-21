import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLogo(props) {
  return (
    <div className='navigation-logo'>
      <Link to='/' className='navigation-link'>
        {props.logo}
      </Link>
    </div>
  );
}

export default NavigationLogo;
