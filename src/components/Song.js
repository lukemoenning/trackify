import React from 'react';
import './styles/Song.css';

function Song({ track }) {
  return (
    <div className='song'>
      {console.log(track)}
      <img src={track?.album?.images[0]?.url} alt={track.name} height={40} width={40}></img>

      <div className='nameAndArtist'>
        <p>{track?.name}</p>
        <p>{track?.artists?.map(artist => artist.name)}</p>
      </div>
  
      <p>{track?.album?.name}</p>

      <p>{msToMinutes(track?.duration_ms)}</p>
    </div>
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