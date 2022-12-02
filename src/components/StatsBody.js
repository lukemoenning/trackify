/**
 * Body component for Stats. Display the statistic the user chooses in the StatsHeader
 */


import React from 'react';
import './styles/StatsBody.css';
import { useDataLayerValue } from '../DataLayer';
import ArtistProfile from './ArtistProfile';
import Song from './Song';

function StatsBody( props ) {

  /**
   * DataLayer
   */
   const [{ topTracksShort, topTracksMedium, topTracksLong,
    topArtistsShort, topArtistsMedium, topArtistsLong}, dispatch] = useDataLayerValue();


  return (
    <div className='statsBody'>

        {/* Different stats the user can view */}
        {(() => {
          switch (props.currentStat) {

            /* TRACKS LAST 4 WEEKS */
            case 'tracksshort':
              return (
                topTracksShort?.items?.map((track, index) => (
                  <Song key={track.id} track={track} rank={index+1}/>
                ))
              );

            /* TRACKS LAST 6 MONTHS */
            case 'tracksmedium':
              return (
                topTracksMedium?.items?.map((track, index) => (
                  <Song key={track.id} track={track} rank={index+1}/>
                ))
              );

            /* TRACKS ALL TIME */
            case 'trackslong':
              return (
                topTracksLong?.items?.map((track, index) => (
                  <Song key={track.id} track={track} rank={index+1}/>
                ))
              );
                
            /* ARTISTS LAST 4 WEEKS */
            case 'artistsshort':
              return (
                topArtistsShort?.items?.map((artist, index) => (
                  <ArtistProfile key={artist.id} artist={artist} rank={index+1}/>
                ))
              );

            /* ARTISTS LAST 6 MONTHS */
            case 'artistsmedium':
              return (
                topArtistsMedium?.items?.map((artist, index) => (
                  <ArtistProfile key={artist.id} artist={artist} rank={index+1}/>
                ))
              );

            /* ARTISTS ALL TIME */
            case 'artistslong':
              return (
                topArtistsLong?.items?.map((artist, index) => (
                  <ArtistProfile key={artist.id} artist={artist} rank={index+1}/>
                ))
              );

            default:
              console.log('Invalid Stat to display.')
              return null;
          }
        })()}
      </div>
  );
}

export default StatsBody;