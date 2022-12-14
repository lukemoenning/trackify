/**
 * Footer section after a successful login
 * 
 * Displays the current playing song information as well as play and volume controls
 */

import React from 'react';
import './styles/Footer.css';
import { useDataLayerValue } from '../DataLayer';
import { Slider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../assets/constants/Colors';
import { 
  PlayCircle, PauseCircle, Shuffle, Repeat, SkipNext, SkipPrevious,
  QueueMusic, VolumeDown, VolumeUp, FavoriteBorder 
} from '@mui/icons-material';


function Footer() {

  /**
   * DataLayer
   */
  const [{ }, dispatch] = useDataLayerValue();

  return (
    <div className='footer'>

      {/* SONG INFO */}
      <div className='songInfo'>
        <FavoriteBorder className='footerIconHighlightable' />
      </div>


      {/* PLAY CONTROLS */}
      <div className='playControls'>
        <Shuffle className='footerIconHighlightable' />
        <SkipPrevious className='footerIcon' />
        <PlayCircle className='footerIcon' fontSize='large'/>
        <SkipNext className='footerIcon' />
        <Repeat className='footerIconHighlightable' />
      </div>


      {/* VOLUME CONTROLS */}
      <div className='volumeControls'>
        <QueueMusic className='footerIcon' />
        <VolumeDown fontSize='small'/>
        <ThemeProvider theme={theme}><Slider className='footerSlider' size='small' defaultValue={25}/></ThemeProvider>
        <VolumeUp fontSize='small'/>
      </div>
     
    </div>
  );
}

export default Footer;