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
import { useDataLayerValue } from '../DataLayer';
import StatsHeader from './StatsHeader';
import StatsBody from './StatsBody';


function Stats() {

  /**
   * DataLayer
   */
   const [{ currentStatsRange, currentStatsTitle }, dispatch] = useDataLayerValue();

  useEffect(() => {
    
  }, []);

  return (
    <div className='stats'>
   
      <StatsHeader />
      <StatsBody currentStat={currentStatsTitle.concat(currentStatsRange)} />

    </div>
  );
}


export default Stats;