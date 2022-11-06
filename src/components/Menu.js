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
import { handleIconClick, fetchTopArtistsLong, displayPlaylist } from '../menuScripts';


function Menu() {

  /**
   * DataLayer
   */
  const [{ spotify, playlists }, dispatch] = useDataLayerValue();


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
      <div onClick={() => fetchTopArtistsLong(spotify, dispatch, 'stats')}>
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