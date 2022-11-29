/**
 * Album componet for displaying square versions of albums and playlists
 */

import React from 'react';
import '../components/styles/Album.css';
import { Avatar } from '@mui/material';


function Album({ album }) {
  return (
    <div className='album'>
      <Avatar className= 'albumPhoto' src={album?.images[0]?.url} alt={album?.name} sx={{height: 150, width: 150}} variant='square'/>
      <h2>{album?.name}</h2>

      {/* IF A PLAYLIST DISPLAY DESCRIPTION OTHERWISE DISPLAY ARTISTS */}
      {album.description ? <p>{album?.description}</p> : <p>{album?.artists?.map(artist => artist.name + ' ')}</p>}
      {/* <p>{album?.description}</p>
      <p>{album?.artists?.map(artist => artist.name + ' ')}</p> */}
    </div>
  )
};

export default Album;