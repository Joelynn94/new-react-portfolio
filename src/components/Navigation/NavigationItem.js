import React from 'react';
import { Link } from 'react-router-dom';

function NavigationItem(props) {
  return (
    <li className='navigation-item'>
      <Link className='navigation-link' to='/'>
        {props.item}
      </Link>
    </li>
  );
}

export default NavigationItem;
