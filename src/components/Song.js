/**
 * Display the album cover, title, artists, album name, and duration in minutes of a song
 */
import React from 'react';
import './styles/Song.css';
import { MusicNote } from '@mui/icons-material';


function Song({ track }) {
  
  const trackURL = "https://open.spotify.com/album/"+track?.album?.id+'?highlight=spotify:track:'+track.id;

  return (
    <a className='song' href={trackURL} target='_blank'>
    
      <div className='leftInfo'>

        {/* If the album image exists display it, otherwise display the blank album image */}
        {track?.album?.images[0] 
          ? (<img src={track?.album?.images[0]?.url} alt={track.name} height={40} width={40}></img>)
          : (<div className='blankAlbumImage'><MusicNote style={{ fontSize: 20}} /></div>)}

        <div className='nameAndArtist'>
          <p className='name'>{track?.name}</p>
          <p className='artist'>{track?.artists?.map(artist => artist.name + ' ')}</p>
        </div>
      </div>

      <p className='songAlbum'>{track?.album?.name}</p>

      <p className='duration'>{msToMinutes(track?.duration_ms)}</p>
    </a>
  );
}


/**
 * Convert from milliseconds to seconds
 * @param {number} ms 
 * @returns {String}
 */
function msToMinutes(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export default Song;