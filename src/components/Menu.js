/**
 * Sidebar for the Account page
 * 
 * Displays navigation bar as well as the users playlists
 */

import React, { useEffect } from 'react';
import './styles/Menu.css';
import logo from '../assets/images/spotify_logo_white.png';
import { useDataLayerValue } from '../DataLayer';
import MenuItem from './MenuItem';
import { Home, LibraryMusic, BarChart } from '@mui/icons-material';
import { changeCurrentBodyDisplay, displayPlaylist, fetchHomeContent, fetchUserStats } from '../menuScripts';


function Menu() {

  /**
   * DataLayer
   */
  const [{ spotify, playlists, topTracksShort, topTracksMedium, topTracksLong,
    topArtistsShort, topArtistsMedium, topArtistsLong,
    featuredPlaylists, newReleases, recentlyPlayedTracks,
    currentBodyDisplay, displayedPlaylist }, dispatch] = useDataLayerValue();

    useEffect(() => {
      
      // Set the original display to Home
      fetchHomeContent(spotify, dispatch, 'home', featuredPlaylists, newReleases, recentlyPlayedTracks);
    }, []);

  return (
    <div className='menu'>

      {/* LOGO */}
      <img src={logo} alt='Spotfiy Logo'></img>

      {/* MAIN ICONS */}

      <div 
          onClick={() => fetchHomeContent(spotify, dispatch, 'home', featuredPlaylists, newReleases, recentlyPlayedTracks)}
          className={currentBodyDisplay==='home' ? 'selectedMenuItem' : ''}>
        <MenuItem text='Home' Icon={Home}/>
      </div>

      <div 
          onClick={() => changeCurrentBodyDisplay(dispatch, 'library')}
          className={currentBodyDisplay==='library' ? 'selectedMenuItem' : ''}>
        <MenuItem text='Your Library' Icon={LibraryMusic}/>
      </div>

      <div 
          onClick={() => fetchUserStats(spotify, dispatch, 'stats', 
            topTracksShort, topTracksMedium, topTracksLong,
            topArtistsShort, topArtistsMedium, topArtistsLong)}
          className={currentBodyDisplay==='stats' ? 'selectedMenuItem' : ''}>
        <MenuItem text='Your Stats' Icon={BarChart}/>
      </div>

      {/* DIVIDER */}
      <br />
      <hr />

      {/* PLAYLISTS */}
      <div className='playlists'>
        {playlists?.items?.map(playlist => (
          <div 
              key={playlist.id} 
              onClick={() => displayPlaylist(spotify, dispatch, playlist.id, 'playlist')}>
            <MenuItem key={playlist.id} text={playlist.name} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;