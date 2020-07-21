import React from 'react';
import NavigationItem from './NavigationItem';

function NavigationMenu(props) {
  return (
    <ul className='navigation-ul' onClick={() => props.setOpen(!props.open)}>
      <NavigationItem item='Home' />
      <NavigationItem item='About' />
      <NavigationItem item='Skills' />
      <NavigationItem item='Portfolio' />
      <NavigationItem item='Contact' />
    </ul>
  );
}

export default NavigationMenu;
