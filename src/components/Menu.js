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

  const handleClick = (newCurrentBodyDisplay) => {
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
      <div onClick={() => handleClick('home')}>
        <MenuItem text='Home' Icon={Home}/>
      </div>
      <div onClick={() => handleClick('library')}>
        <MenuItem text='Your Library' Icon={LibraryMusic}/>
      </div>
      <div onClick={() => handleClick('stats')}>
        <MenuItem text='Your Stats' Icon={BarChart}/>
      </div>

      {/* DIVIDER */}
      <br />
      <hr />

      {/* PLAYLISTS */}
      <div className='playlists'>
        {playlists?.items?.map(playlist => (
          <MenuItem text={playlist.name} />
        ))}
      </div>

    </div>
  );
}

export default Menu;