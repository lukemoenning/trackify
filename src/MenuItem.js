import React from 'react';
import './MenuItem.css';

function MenuItem({ text, Icon}) {
  return (
    <div className='menuItem'>
      {Icon && <Icon className='menuItemIcon' />}
      {Icon ? <h3 className='menuItemText'>{text}</h3> : <p className='menuItemText'>{text}</p>}
    </div>
  );
}

export default MenuItem;