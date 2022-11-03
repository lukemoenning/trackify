import React from 'react';
import './Footer.css';
import { 
  PlayCircle, PauseCircle, Shuffle, Repeat, SkipNext, SkipPrevious,
  QueueMusic, VolumeDown, VolumeUp, FavoriteBorder 
} from '@mui/icons-material';
// import { Slider } from '@mui/material/core';
import { useDataLayerValue } from './DataLayer';

function Footer() {

  /**
   * DataLayer
   */
   const [{ }, dispatch] = useDataLayerValue();

  return (
    <div className='footer'>

      <div className='songInfo'>
        <FavoriteBorder className='footerIconHighlightable' />
      </div>

      <div className='playControls'>
        <Shuffle className='footerIconHighlightable' />
        <SkipPrevious className='footerIcon' />
        <PlayCircle className='footerIcon' fontSize='large'/>
        <SkipNext className='footerIcon' />
        <Repeat className='footerIconHighlightable' />
      </div>

      <div className='volumeControls'>
        <QueueMusic className='footerIcon' />
        <VolumeDown className='footerIcon' fontSize='small'/>
        <VolumeUp className='footerIcon' fontSize='small'/>
      </div>
     
    </div>
  );
}

export default Footer;