import React from 'react';
import './MenuItem.css';

function MenuItem({ text, Icon}) {
  return (
    <div className='menuItem'>

      {Icon ? <h2>{text}</h2> : <p>{text}</p>}
    </div>
  );
}

export default MenuItem;