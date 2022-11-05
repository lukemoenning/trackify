import React from 'react';
import './styles/ArtistProfile.css';

function ArtistProfile({ artist }) {
  return (
    <div className='artistProfile'>
      <p>{artist.name}</p>
    </div>
  );
}

export default ArtistProfile;