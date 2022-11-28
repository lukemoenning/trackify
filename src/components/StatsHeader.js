/**
 * Header for the Stats componenet
 * 
 * Contains the navigation
 */


import React, { useEffect, useState } from 'react';
import './styles/StatsHeader.css';
import '../assets/constants/Colors.css';
import { useDataLayerValue } from '../DataLayer';



function StatsHeader() {

  /**
   * DataLayer
   */
  const [{ currentStatsRange, currentStatsTitle }, dispatch] = useDataLayerValue();

  useEffect(() => {
  
  }, []);

  return (
    <div className='statsHeader'>

      {/* TITLE */}
      <div className='statsTitle'>
        <h2 
          className={currentStatsTitle==='tracks' ? 'tracks selectedStat' : 'tracks'}
          onClick={() => changeStatsTitle(dispatch, currentStatsTitle, 'tracks')}
        >Top Songs</h2>
        <h2 
          className={currentStatsTitle==='artists' ? 'artists selectedStat' : 'artists'} 
          onClick={() => changeStatsTitle(dispatch, currentStatsTitle, 'artists')}
        >Top Artists</h2>
      </div>

      {/* RANGE */}
      <div className='statsRange'>
        <h3 
          className={currentStatsRange==='short' ? 'short selectedStat' : 'short'}
          onClick={() => changeStatsRange(dispatch, currentStatsRange, 'short')}
        >Last 4 Weeks</h3>
        <h3 
          className={currentStatsRange==='medium' ? 'medium selectedStat' : 'medium'} 
          onClick={() => changeStatsRange(dispatch, currentStatsRange, 'medium')}
        >Last 6 Months</h3>
        <h3 
          className={currentStatsRange==='long' ? 'long selectedStat' : 'long'} 
          onClick={() => changeStatsRange(dispatch, currentStatsRange, 'long')}
        >All Time</h3>
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
 function changeStatsTitle(dispatch, currentStatsTitle, newTitle){
  // updateHighlight(currentStatsTitle, newTitle);

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
function changeStatsRange(dispatch, currentStatsRange, newRange){
  // updateHighlight(currentStatsRange, newRange);

  dispatch({
    type: "SET_CURRENT_STATS_RANGE",
    currentStatsRange: newRange,
  });
}

/**
 * Remove the previous highlighted navigation and highlight the new one
 * 
 * @param {String} currentHighlight 
 * @param {String} newHighlight 
 */
function updateHighlight(currentHighlight, newHighlight) {
  let prev = document.getElementsByClassName(currentHighlight);
  prev.classList.remove('highlight');

  let cur = document.getElementsByClassName(newHighlight);
  cur.classList.add('highlight');
}


export default StatsHeader;