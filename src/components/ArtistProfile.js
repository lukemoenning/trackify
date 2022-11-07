/**
 * An artist profile to be created for each artist when they are displayed
 * 
 * Displays the artists profile image and name
 */

import React from 'react';
import './styles/ArtistProfile.css';
import { Avatar } from '@mui/material';


function ArtistProfile({ artist }) {
  return (
    <div className='artistProfile'>
      <Avatar className='pfp' src={artist?.images[0]?.url} alt={artist.name} sx={{height: 200, width: 200}}/>
      <h2>{artist.name}</h2>
      <p>Artist</p>
    </div>
  );
}

export default ArtistProfile;