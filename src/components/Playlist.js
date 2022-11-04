import React from 'react';
import './styles/Playlist.css';
import Song from './Song';
import { useDataLayerValue } from '../DataLayer';

function Playlist(id) {

  /**
  * DataLayer
  */
   const [{displayedPlaylist}, dispatch] = useDataLayerValue();

  return (
    <div className='playlist'>

      <div className='playlistBanner'>
        <img src={displayedPlaylist?.images[0]?.url} height={200} width={200}></img>

        <div className='playlistBannerText'>
          <strong>PLAYLIST</strong>
          <h2>{displayedPlaylist.name}</h2>
        </div>
      </div>

 
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </div>
  );
}

export default Playlist;