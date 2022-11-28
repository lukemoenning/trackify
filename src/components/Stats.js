/**
 * Loads the StatsHeader and StatsBody components which contain
 * options for the stats the user wishes to view. 
 * 
 * Possibilities are: 
 *    Top Artists for 4 weeks, 6 months, and all time.
 *    Top Tracks for 4 weeks, 6 months, and all time. 
 */

import React, { useEffect } from 'react';
import './styles/Stats.css';
import StatsHeader from './StatsHeader';
import StatsBody from './StatsBody';


function Stats() {

  useEffect(() => {
    
  }, []);

  return (
    <div className='stats'>
   
      <StatsHeader />
      <StatsBody currentStat='tracksshort' />

    </div>
  );
}


export default Stats;