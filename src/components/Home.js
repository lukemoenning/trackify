/**
 * The home component after the user chooses to display it
 */

import React from 'react';
import './styles/Home.css';
import { useDataLayerValue } from '../DataLayer';
import Album from './Album';
import Song from './Song';


function Home() {

  /**
   * DataLayer
   */
   const [{ spotify, user, featuredPlaylists, newReleases, recentlyPlayedTracks }, dispatch] = useDataLayerValue();

  /**
   * Set to keep track of which recently played tracks have been displayed to prevent duplicates
   */
  let recentlyPlayedTracksDisplayed = new Set();

  return (
    <div className='home'>
    
      {/* GREETING */}
      <div className='greetingWrap'>
        <h1>{getGreeting()} {user?.display_name}</h1>
      </div>

      {/* FEATURED PLAYLISTS */}
      <div className='featuredPlaylistsWrap'>
        <h2>{featuredPlaylists?.message}</h2>

        <div className='featuredPlaylists'>
          {featuredPlaylists?.playlists.items?.map(album => (
            <Album album={album} key={album?.id} />
          ))}
        </div>

      </div>

      {/* NEW RELEASES */}
      <div className='newReleasesWrap'>
        <h2>New releases</h2>
            
        <div className='newReleases'>
          {newReleases?.albums?.items?.map(album => (
            <Album album={album} key={album?.id} />
          ))}
        </div>

      </div>

      {/* RECENTLY PLAYED TRACKS */}
      <div className='recentlyPlayedTracksWrap'>
        <h2>Recently played tracks</h2>

        <div className='recentlyPlayedTracks'>

          {/* Only add the track if it has not already been display */}
          {recentlyPlayedTracks?.items?.map(item => {
            if (!recentlyPlayedTracksDisplayed.has(item?.track?.id)) {
              recentlyPlayedTracksDisplayed.add(item?.track?.id);
              return (<Song key={item?.track?.id} track={item?.track}/>);
            }
          })}
        </div>

      </div>

    </div>
  );
}

/**
 * Get the greeting for the home page, will differ depening on the time of day.
 * 
 * @returns String with the greeting that corresponds to the time of day
 */
function getGreeting() {
  
  const todaysDate = new Date();
  const currentHour = todaysDate.getHours();

  switch (true) {

    case currentHour<12:
      return "Good morning";

    case currentHour<18:
      return "Good afternoon";

    case currentHour<24:
      return "Good evening";

    default:
      return "Hello";
  }
}

export default Home;