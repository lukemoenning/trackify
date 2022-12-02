/**
 * Album componet for displaying square versions of albums and playlists
 */

import React from 'react';
import '../components/styles/Album.css';
import { Avatar } from '@mui/material';


function Album({ album }) {

  /**
   * External link for the album, will distinguish if the object is an album or playlist.
   * If a description exists, then it is a playlist
   */
  let link
  album.description ? link = "https://open.spotify.com/playlist/"+album?.id : link = "https://open.spotify.com/album/"+album?.id;

  return (
    <a className='album' href={link} target='_blank'>
      <Avatar className= 'albumPhoto' src={album?.images[0]?.url} alt={album?.name} sx={{height: 150, width: 150}} variant='square'/>
      <h2>{album?.name}</h2>

      {/* IF A PLAYLIST DISPLAY DESCRIPTION OTHERWISE DISPLAY ARTISTS */}
      {album.description ? <p>{album?.description}</p> : <p>{album?.artists?.map(artist => artist.name + ' ')}</p>}
    </a>
  )
};

export default Album;