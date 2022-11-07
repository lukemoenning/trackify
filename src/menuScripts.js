/**
 * Scripts for handling Menu Item onClick functions
 */


import { fetchTopSongsShort, fetchTopSongsMedium, fetchTopSongsLong, 
  fetchTopArtistsShort, fetchTopArtistsMedium, fetchTopArtistsLong } from './fetchStats';



  /**
   * Update the current Body component to display Stats component then fetch the user's statistics
   * 
   * @param {*} spotify 
   * @param {*} dispatch 
   * @param {String} setDisplayStats - 'stats'
   * @param {*} topSongsShort - current topSongsShort
   * @param {*} topSongsMedium - current topSongsMedium
   * @param {*} topSongsLong - current topSongsLong
   * @param {*} topArtistsShort - current topArtistsShort
   * @param {*} topArtistsMedium - current topArtistsMedium
   * @param {*} topArtistsLong - current topArtistsLong
   */
export const fetchUserStats = (spotify, dispatch, setDisplayStats, 
  topSongsShort, topSongsMedium, topSongsLong,
  topArtistsShort, topArtistsMedium, topArtistsLong
) => {

  // Change current display to Your Stats
  dispatch({
    type: "SET_CURRENT_BODY_DISPLAY",
    currentBodyDisplay: setDisplayStats,
  });

  // Reset displayedPlaylist
  dispatch({
    type: "SET_DISPLAYED_PLAYLIST",
    displayedPlaylist: null,
  });

  // Fetch each Top Songs Range if it does not already exist
  if (topSongsShort==null) {fetchTopSongsShort(spotify, dispatch);}
  if (topSongsMedium==null) {fetchTopSongsMedium(spotify, dispatch);}
  if (topSongsLong==null) {fetchTopSongsLong(spotify, dispatch);}

  // Fetch each Top Artists Range if it does not already exist
  if (topArtistsShort==null) {fetchTopArtistsShort(spotify, dispatch);}
  if (topArtistsMedium==null) {fetchTopArtistsMedium(spotify, dispatch);}
  if (topArtistsLong==null) {fetchTopArtistsLong(spotify, dispatch);}

}



/**
 * Display the prompted page and reset the current playlist
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 * @param {String} newCurrentBodyDisplay - New page to display
 */
export const handleIconClick = (dispatch, newCurrentBodyDisplay) => {

  // Change the current display to newCurrentBodyDisplay
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



/**
 * Change the display to the requested playlist
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 * @param {*} playlistID - ID of the playlist to display
 * @param {String} newCurrentBodyDisplay - tell Body component to display Playlist component
 */
export const displayPlaylist = (spotify, dispatch, playlistID, newCurrentBodyDisplay) => {

  // Retrieve the requested playlist then push it to the data layer
  spotify.getPlaylist(playlistID).then(playlist => 
    dispatch({
      type: "SET_DISPLAYED_PLAYLIST",
      displayedPlaylist: playlist,
    })
  );

  // Change the display to the current playlist
  dispatch({
    type: "SET_CURRENT_BODY_DISPLAY",
    currentBodyDisplay: newCurrentBodyDisplay,
  });

}