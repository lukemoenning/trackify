import React, { useEffect } from 'react';
import './styles/Menu.css';
import logo from '../assets/images/spotify_logo_white.png';
import MenuItem from './MenuItem';
import { Home, LibraryMusic, BarChart } from '@mui/icons-material';
import { useDataLayerValue } from '../DataLayer';


function Menu() {

  /**
  * DataLayer
  */
  const [{ playlists }, dispatch] = useDataLayerValue();

  const handleIconClick = (newCurrentBodyDisplay) => {
    dispatch({
      type: "SET_CURRENT_BODY_DISPLAY",
      currentBodyDisplay: newCurrentBodyDisplay,
    });
  }

  const displayPlaylist = (playlist, newCurrentBodyDisplay) => {
    dispatch({
      type: "SET_DISPLAYED_PLAYLIST",
      displayedPlaylist: playlist,
    });

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
      <div onClick={() => handleIconClick('stats')}>
        <MenuItem text='Your Stats' Icon={BarChart}/>
      </div>

      {/* DIVIDER */}
      <br />
      <hr />

      {/* PLAYLISTS */}
      <div className='playlists'>
        {playlists?.items?.map(playlist => (
          <div onClick={() => displayPlaylist(playlist, 'playlist')}>
            <MenuItem text={playlist.name} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;