import React from 'react';
import './Menu.css';
import logo from './assets/images/spotify_logo_white.png';
import MenuItem from './MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


function Menu() {
  return (
    <div className='menu'>
      <img src={logo} alt='Spotfiy Logo'></img>
      <MenuItem text='Home' Icon={HomeIcon}/>
      <MenuItem text='Search' Icon={SearchIcon}/>
      <MenuItem text='Your Library' Icon={LibraryMusicIcon}/>
    </div>
  );
}

export default Menu;