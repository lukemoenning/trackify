/**
 * Body component for Stats. Display the statistic the user chooses in the StatsHeader
 */


import React from 'react';
import './styles/StatsBody.css';
import { useDataLayerValue } from '../DataLayer';
import ArtistProfile from './ArtistProfile';
import Song from './Song';

function StatsBody() {

  /**
   * DataLayer
   */
   const [{ topTracksShort, topTracksMedium, topTracksLong,
    topArtistsShort, topArtistsMedium, topArtistsLong, 
    currentStatsRange, currentStatsTitle }, dispatch] = useDataLayerValue();

  const dis = currentStatsTitle+currentStatsRange;

  return (
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
  );
}

export default StatsBody;