import React from 'react';
import './Menu.css';
import logo from './assets/images/spotify_logo_white.png';
import MenuItem from './MenuItem';
import { Home, Search, LibraryMusic } from '@mui/icons-material';
import { useDataLayerValue } from './DataLayer';


function Menu() {

  /**
   * DataLayer
   */
   const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='menu'>

      {/* LOGO */}
      <img src={logo} alt='Spotfiy Logo'></img>

      {/* MAIN ICONS */}
      <MenuItem text='Home' Icon={Home}/>
      <MenuItem text='Search' Icon={Search}/>
      <MenuItem text='Your Library' Icon={LibraryMusic}/>

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