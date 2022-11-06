/**
 * The Your Stats component after the user chooses to display it
 * 
 * Contains options for the stats the user wishes to view. 
 * 
 * Possibilities are: 
 *    Top Artists for 4 weeks, 6 months, and all time.
 *    Top Tracks for 4 weeks, 6 months, and all time. 
 */

import React from 'react';
import './styles/Stats.css';
import { useDataLayerValue } from '../DataLayer';
import ArtistProfile from './ArtistProfile';


function Stats() {

  /**
  * DataLayer
  */
  const [{ topArtistsLong }, dispatch] = useDataLayerValue();

  
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

export default Stats;