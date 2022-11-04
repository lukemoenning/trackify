import { Avatar } from '@mui/material';
import React from 'react';
import './styles/Header.css';
import { useDataLayerValue } from '../DataLayer';

function Header() {

  /**
   * DataLayer
   */
   const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className='header'>

      <div className='userProfile'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} sx={{height: 30, width: 30}}/>
        <h4>{user?.display_name}</h4> 
      </div>

    </div>
  );
}

export default Header;