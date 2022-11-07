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
   
      {/* STATS COMPONENT HEADER */}
      <div className='statsHeader'>

        {/* TITLE */}
        <div className='statsTitle'>
          <h2 onClick={() => changeStatsTitle(dispatch, 'songs')}>Top Songs</h2>
          <h2 onClick={() => changeStatsTitle(dispatch, 'artists')}>Top Artists</h2>
        </div>

        {/* RANGE */}
        <div className='statsRange'>
          <h3 onClick={() => changeStatsRange(dispatch, 'short')}>Last 4 Weeks</h3>
          <h3 onClick={() => changeStatsRange(dispatch, 'medium')}>Last 6 Months</h3>
          <h3 onClick={() => changeStatsRange(dispatch, 'long')}>All Time</h3>
        </div>
      </div>


      {/* STATS COMPONENT BODY */}
      <div className='statsBody'>
        {topArtistsLong?.items?.map(artist => (
          <ArtistProfile key={artist.name} artist={artist}/>
        ))}
      </div>

    </div>
  );
}

/**
 * Change the current stats title to display, options are: Top Songs or Top Artists
 * 
 * @param {*} dispatch 
 * @param {String} newTitle 
 */
function changeStatsTitle(dispatch, newTitle){
  dispatch({
    type: "SET_CURRENT_STATS_TITLE",
    currentStatsTitle: newTitle,
  });
}

/**
 * Change the current stats range to display, options are: All time, Last 6 Months, and Last 4 Weeks
 * 
 * @param {*} dispatch 
 * @param {String} newRange 
 */
function changeStatsRange(dispatch, newRange){
  dispatch({
    type: "SET_CURRENT_STATS_RANGE",
    currentStatsRange: newRange,
  });
}



export default Stats;