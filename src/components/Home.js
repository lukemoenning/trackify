/**
 * The home component after the user chooses to display it
 */

import React from 'react';
import './styles/Home.css';
import { useDataLayerValue } from '../DataLayer';

function Home() {

  /**
   * DataLayer
   */
   const [{ spotify, user, featuredPlaylists, newReleases, recentlyPlayedTracks }, dispatch] = useDataLayerValue();


  return (
    <div className='home'>
    
      {/* GREETING */}
      <div className='greetingWrap'>
        {getGreeting(user)}
      </div>

      {/* FEATURED PLAYLISTS */}
      <div className='featuredPlaylistsWrap'>
        <h2>{featuredPlaylists?.message}</h2>

        <div className='featuredPlaylists'>

        </div>

      </div>

      {/* NEW RELEASES */}
      <div className='newReleasesWrap'>
        <h2>New releases</h2>

        <div className='newReleases'>

        </div>

      </div>

      {/* RECENTLY PLAYED TRACKS */}
      <div className='recentlyPlayedTracksWrap'>
        <h2>Recently played tracks</h2>

        <div className='recentlyPlayedTracks'>

        </div>

      </div>

    </div>
  );
}

/**
 * Get the greeting for the home page, will differ depening on the time of day.
 * 
 * @param {*} user - current user
 * @returns h1 element containing the greeting
 */
function getGreeting(user) {
  
  const todaysDate = new Date();
  const currentHour = todaysDate.getHours();

  switch (true) {

    case currentHour<12:
      return <h1>Good Morning {user?.name}</h1>;

    case currentHour<18:
      return <h1>Good Afternoon {user?.name}</h1>;

    case currentHour<24:
      return <h1>Good Evening {user?.name}</h1>;

    default:
      return <h1>Hello {user?.name}</h1>;
  }
}

export default Home;