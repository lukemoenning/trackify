/**
 * Scripts for handling Menu Item onClick functions
 */



/**
 * Fetch information about user's top artists of all time
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 * @param {String} setDisplayStats - tell Body component to display Stats component
 */
export const fetchTopArtistsLong = (spotify, dispatch, setDisplayStats) => {

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


  // Options for the api request
  const optionsLong = {
    'limit': 50,
    'offset': 0,
    'time_range': 'long_term',
  }

  // Fetch the information on top artists of all time then push it to the data layer
  spotify.getMyTopArtists(optionsLong).then(topArtistsLong => 
    dispatch({
      type: "SET_TOP_ARTISTS_LONG",
      topArtistsLong: topArtistsLong,
    }))
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