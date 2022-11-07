/**
 * Sidebar for the Account page
 * 
 * Displays navigation bar as well as the users playlists
 */

import './styles/Menu.css';
import logo from '../assets/images/spotify_logo_white.png';
import { useDataLayerValue } from '../DataLayer';
import MenuItem from './MenuItem';
import { Home, LibraryMusic, BarChart } from '@mui/icons-material';
import { handleIconClick, displayPlaylist, fetchUserStats } from '../menuScripts';


function Menu() {

  /**
   * DataLayer
   */
  const [{ spotify, playlists, topSongsShort, topSongsMedium, topSongsLong,
    topArtistsShort, topArtistsMedium, topArtistsLong }, dispatch] = useDataLayerValue();


  return (
    <div className='menu'>

      {/* LOGO */}
      <img src={logo} alt='Spotfiy Logo'></img>

      {/* MAIN ICONS */}
      
      <div onClick={() => handleIconClick(dispatch, 'home')}>
        <MenuItem text='Home' Icon={Home}/>
      </div>

      <div onClick={() => handleIconClick(dispatch, 'library')}>
        <MenuItem text='Your Library' Icon={LibraryMusic}/>
      </div>

      <div onClick={() => fetchUserStats(spotify, dispatch, 'stats', 
                                          topSongsShort, topSongsMedium, topSongsLong,
                                          topArtistsShort, topArtistsMedium, topArtistsLong)}>
        <MenuItem text='Your Stats' Icon={BarChart}/>
      </div>

      {/* DIVIDER */}
      <br />
      <hr />

      {/* PLAYLISTS */}
      <div className='playlists'>
        {playlists?.items?.map(playlist => (
          <div key={playlist.id} onClick={() => displayPlaylist(spotify, dispatch, playlist.id, 'playlist')}>
            <MenuItem key={playlist.id} text={playlist.name} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;