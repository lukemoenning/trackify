import React from 'react';
import './styles/Song.css';

function Song({ track }) {
  return (
    <div className='song'>
      <p>{track.name}</p>
    </div>
  );
}

export default Song;