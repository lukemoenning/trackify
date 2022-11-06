/**
 * 
 */

import './styles/Menu.css';
import logo from '../assets/images/spotify_logo_white.png';
import { useDataLayerValue } from '../DataLayer';
import MenuItem from './MenuItem';
import { Home, LibraryMusic, BarChart } from '@mui/icons-material';


function Menu() {

  /**
   * DataLayer
   */
  const [{ spotify, playlists }, dispatch] = useDataLayerValue();

  const fetchStats = (newCurrentBodyDisplay) => {
    dispatch({
      type: "SET_CURRENT_BODY_DISPLAY",
      currentBodyDisplay: newCurrentBodyDisplay,
    });

    // Reset displayedPlaylist
    dispatch({
      type: "SET_DISPLAYED_PLAYLIST",
      displayedPlaylist: null,
    });

    const optionsLong = {
      'limit': 50,
      'offset': 0,
      'time_range': 'long_term',
    }
  
    spotify.getMyTopArtists(optionsLong).then(topArtistsLong => 
      dispatch({
        type: "SET_TOP_ARTISTS_LONG",
        topArtistsLong: topArtistsLong,
      }))
  }

  const handleIconClick = (newCurrentBodyDisplay) => {
    dispatch({
      type: "SET_CURRENT_BODY_DISPLAY",
      currentBodyDisplay: newCurrentBodyDisplay,
    });

    // Reset displayedPlaylist
    dispatch({
      type: "SET_DISPLAYED_PLAYLIST",
      displayedPlaylist: null,
    });
  }

  const displayPlaylist = (playlistID, newCurrentBodyDisplay) => {

    spotify.getPlaylist(playlistID).then(playlist => 
      dispatch({
        type: "SET_DISPLAYED_PLAYLIST",
        displayedPlaylist: playlist,
      })
    );

    dispatch({
      type: "SET_CURRENT_BODY_DISPLAY",
      currentBodyDisplay: newCurrentBodyDisplay,
    });

  }

  return (
    <div className='menu'>

      {/* LOGO */}
      <img src={logo} alt='Spotfiy Logo'></img>

      {/* MAIN ICONS */}
      <div onClick={() => handleIconClick('home')}>
        <MenuItem text='Home' Icon={Home}/>
      </div>
      <div onClick={() => handleIconClick('library')}>
        <MenuItem text='Your Library' Icon={LibraryMusic}/>
      </div>
      <div onClick={() => fetchStats('stats')}>
        <MenuItem text='Your Stats' Icon={BarChart}/>
      </div>

      {/* DIVIDER */}
      <br />
      <hr />

      {/* PLAYLISTS */}
      <div className='playlists'>
        {playlists?.items?.map(playlist => (
          <div key={playlist.id} onClick={() => displayPlaylist(playlist.id, 'playlist')}>
            <MenuItem key={playlist.id} text={playlist.name} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;