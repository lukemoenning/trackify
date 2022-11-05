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

      <p>{track?.duration_ms}</p>
    </div>
  );
}

export default Song;