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
import Song from './Song';


function Stats() {

  /**
   * DataLayer
   */
  const [{ topTracksShort, topTracksMedium, topTracksLong,
    topArtistsShort, topArtistsMedium, topArtistsLong, 
    currentStatsRange, currentStatsTitle }, dispatch] = useDataLayerValue();

  const dis = currentStatsTitle+currentStatsRange;
  console.log(dis)
  // console.log(topArtistsShort)

  return (
    <div className='stats'>
   
      {/* STATS COMPONENT HEADER */}
      <div className='statsHeader'>

        {/* TITLE */}
        <div className='statsTitle'>
          <h2 className='tracks' onClick={() => changeStatsTitle(dispatch, currentStatsTitle, 'tracks')}>Top Songs</h2>
          <h2 className='artists' onClick={() => changeStatsTitle(dispatch, currentStatsTitle, 'artists')}>Top Artists</h2>
        </div>

        {/* RANGE */}
        <div className='statsRange'>
          <h3 className='short' onClick={() => changeStatsRange(dispatch, currentStatsRange, 'short')}>Last 4 Weeks</h3>
          <h3 className='medium' onClick={() => changeStatsRange(dispatch, currentStatsRange, 'medium')}>Last 6 Months</h3>
          <h3 className='long' onClick={() => changeStatsRange(dispatch, currentStatsRange, 'long')}>All Time</h3>
        </div>
      </div>

      {/* ADD HIGHTLIGHT TO DEFAULT OPTIONS */}
      {/* {document.getElementsByClassName('tracks').classList.add('highlight')}
      {document.getElementsByClassName('short').classList.add('highlight')} */}


      {/* STATS COMPONENT BODY */}
      <div className='statsBody'>

        {/* Different stats the user can view */}
        {((topTracksShort, topTracksMedium, topTracksLong,
            topArtistsShort, topArtistsMedium, topArtistsLong 
          ) => {
          switch (dis) {

            /* TRACKS LAST 4 WEEKS */
            case 'tracksshort':
              return (
                topTracksShort?.items?.map(track => (
                  <Song key={track.name} track={track}/>
                ))
              );

            /* TRACKS LAST 6 MONTHS */
            case 'tracksmedium':
              return (
                topTracksMedium?.items?.map(track => (
                  <Song key={track.name} track={track}/>
                ))
              );

            /* TRACKS ALL TIME */
            case 'trackslong':
              return (
                topTracksLong?.items?.map(track => (
                  <Song key={track.name} track={track}/>
                ))
              );
                
            /* ARTISTS LAST 4 WEEKS */
            case 'artistsshort':
              return (
                topArtistsShort?.items?.map(artist => (
                  <ArtistProfile key={artist.name} artist={artist}/>
                ))
              );

            /* ARTISTS LAST 6 MONTHS */
            case 'artistsmedium':
              return (
                topArtistsMedium?.items?.map(artist => (
                  <ArtistProfile key={artist.name} artist={artist}/>
                ))
              );

            /* ARTISTS ALL TIME */
            case 'artistslong':
              return (
                topArtistsLong?.items?.map(artist => (
                  <ArtistProfile key={artist.name} artist={artist}/>
                ))
              );

            default:
              return null;
          }
        })()}
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
  updateHighlight(currentStatsTitle, newTitle);

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
  updateHighlight(currentStatsRange, newRange);

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



export default Stats;