/**
 * Playlist component to load an opened playlist
 * 
 * Retrieve songs from the playlist and create a Song component for each
 */

import React from 'react';
import './styles/Playlist.css';
import { useDataLayerValue } from '../DataLayer';
import Song from './Song';
import { PlayCircle } from '@mui/icons-material';


function Playlist() {

  /**
  * DataLayer
  */
  const [{ displayedPlaylist }, dispatch] = useDataLayerValue();

  return (
    <div className='playlist'>

      <div className='playlistBanner'>
        <img src={displayedPlaylist?.images[0]?.url} height={250} width={250}></img>

        <div className='playlistBannerText'>
          <strong>PLAYLIST</strong>
          <h1>{displayedPlaylist?.name}</h1>
          <h3>{displayedPlaylist?.owner.display_name} ∘ {displayedPlaylist?.tracks.total} Songs</h3>
        </div>
      </div>

      <a href={"https://open.spotify.com/playlist/"+displayedPlaylist?.id} target='_blank'>
        <PlayCircle className='playCircle' style={{ fontSize: 75}}/>
      </a>
 
      <div className='songs'>
        {displayedPlaylist?.tracks?.items?.map(item => (
          <Song key={item.track.name} track={item.track}/>
        ))}
      </div>

    </div>
  );
}

export default Playlist;