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
import StatsHeader from './StatsHeader';
import StatsBody from './StatsBody';


function Stats() {


  return (
    <div className='stats'>
   
      <StatsHeader />
      <StatsBody />

    </div>
  );
}


export default Stats;