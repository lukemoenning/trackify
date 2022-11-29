/**
 * Scripts for handling Menu Item onClick functions
 */


import { fetchTopTracksShort, fetchTopTracksMedium, fetchTopTracksLong, 
  fetchTopArtistsShort, fetchTopArtistsMedium, fetchTopArtistsLong,
  fetchFeaturedPlaylists, fetchNewReleases, fetchRecentlyPlayedTracks } from './fetchRequests';



  /**
   * Update the current Body component to display Stats component then fetch the user's statistics
   * 
   * @param {*} spotify 
   * @param {*} dispatch 
   * @param {String} setDisplayStats - 'stats'
   * @param {*} topTracksShort - current topSongsShort
   * @param {*} topTracksMedium - current topSongsMedium
   * @param {*} topTracksLong - current topSongsLong
   * @param {*} topArtistsShort - current topArtistsShort
   * @param {*} topArtistsMedium - current topArtistsMedium
   * @param {*} topArtistsLong - current topArtistsLong
   */
export const fetchUserStats = (spotify, dispatch, setDisplayStats, 
  topSongsShort, topSongsMedium, topSongsLong,
  topArtistsShort, topArtistsMedium, topArtistsLong
) => {

  // Change current display to Your Stats
  changeCurrentBodyDisplay(dispatch, setDisplayStats);

  // Fetch each Top Songs Range if it does not already exist
  if (topSongsShort==null) {fetchTopTracksShort(spotify, dispatch);}
  if (topSongsMedium==null) {fetchTopTracksMedium(spotify, dispatch);}
  if (topSongsLong==null) {fetchTopTracksLong(spotify, dispatch);}

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
export const changeCurrentBodyDisplay = (dispatch, newCurrentBodyDisplay) => {

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

/**
 * Update the current Body component to display Home component then fetch the home content
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 * @param {String} setDisplayHome - 'home'
 * @param {*} featuredPlaylists 
 * @param {*} newReleases 
 * @param {*} recentlyPlayedTracks 
 */
export const fetchHomeContent = (spotify, dispatch, setDisplayHome, featuredPlaylists, newReleases, recentlyPlayedTracks) => {
  
  // Change current display to Home
  changeCurrentBodyDisplay(dispatch, setDisplayHome);

  // Fetch home content if it does not already exist
  if (featuredPlaylists==null) {fetchFeaturedPlaylists(spotify, dispatch);}
  if (newReleases==null) {fetchNewReleases(spotify, dispatch);}
  if (recentlyPlayedTracks==null) {fetchRecentlyPlayedTracks(spotify, dispatch);}
}