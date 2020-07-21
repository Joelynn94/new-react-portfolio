import React from 'react';

function NavigationToggle(props) {
  return (
    <div
      className='navigation-toggle'
      onClick={() => props.setOpen(!props.open)}
    >
      <i className='far fa-bars'></i>
    </div>
  );
}

export default NavigationToggle;
