import React from 'react';
import './styles/Stats.css';
import { useDataLayerValue } from '../DataLayer';
import ArtistProfile from './ArtistProfile';

function Stats() {

  /**
  * DataLayer
  */
  const [{ topArtistsLong, spotify }, dispatch] = useDataLayerValue();

  // fetchStats(spotify, dispatch);

  return (
    <div className='stats'>
      <h1>The Stats page has not yet been created.</h1>
      <br /> <br /> 
      <h1>Check back in later!</h1>

      {topArtistsLong?.items?.map(artist => (
        <ArtistProfile key={artist.name} artist={artist}/>
      ))}

    </div>
  );
}

// function fetchStats(spotify, dispatch) {

//   const optionsLong = {
//     'limit': 50,
//     'offset': 0,
//     'time_range': 'long_term',
//   }

//   spotify.getMyTopArtists(optionsLong).then(topArtistsLong => 
//     dispatch({
//       type: "SET_TOP_ARTISTS_LONG",
//       topArtistsLong: topArtistsLong,
//     }))
// }

export default Stats;