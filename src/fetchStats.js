/**
 * Fetch requests for user statistics
 */



// Options for the api request - short range
const optionsShort = {
  'limit': 50,
  'offset': 0,
  'time_range': 'short_term',
}

// Options for the api request - medium range
const optionsMedium = {
  'limit': 50,
  'offset': 0,
  'time_range': 'medium_term',
}

// Options for the api request - long range
const optionsLong = {
  'limit': 50,
  'offset': 0,
  'time_range': 'long_term',
}





/**
 * Fetch information about user's top songs the last 4 weeks
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 */
 export const fetchTopTracksShort = (spotify, dispatch) => {
  spotify.getMyTopTracks(optionsShort).then(topTracksShort => 
    dispatch({
      type: "SET_TOP_TRACKS_SHORT",
      topTracksShort: topTracksShort,
    }))
}


/**
 * Fetch information about user's top songs the last 6 months
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 */
 export const fetchTopTracksMedium = (spotify, dispatch) => {
  spotify.getMyTopTracks(optionsMedium).then(topTracksMedium => 
    dispatch({
      type: "SET_TOP_TRACKS_MEDIUM",
      topTracksMedium: topTracksMedium,
    }))
}


/**
 * Fetch information about user's top songs of all time
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 */
 export const fetchTopTracksLong = (spotify, dispatch) => {
  spotify.getMyTopTracks(optionsLong).then(topTracksLong => 
    dispatch({
      type: "SET_TOP_TRACKS_LONG",
      topTracksLong: topTracksLong,
    }))
}



/**
 * Fetch information about user's top artists the last 4 weeks
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 */
 export const fetchTopArtistsShort = (spotify, dispatch) => {
  spotify.getMyTopArtists(optionsShort).then(topArtistsShort => 
    dispatch({
      type: "SET_TOP_ARTISTS_SHORT",
      topArtistsShort: topArtistsShort,
    }))
}

/**
 * Fetch information about user's top artists the last 6 months
 * 
 * @param {*} spotify 
 * @param {*} dispatch 
 */
 export const fetchTopArtistsMedium = (spotify, dispatch) => {
  spotify.getMyTopArtists(optionsMedium).then(topArtistsMedium => 
    dispatch({
      type: "SET_TOP_ARTISTS_MEDIUM",
      topArtistsMedium: topArtistsMedium,
    }))
}


/**
 * Fetch information about user's top artists of all time
 * 
 * @param {*} spotify 
 * @param {*} dispatch Long
 */
 export const fetchTopArtistsLong = (spotify, dispatch) => {
  spotify.getMyTopArtists(optionsLong).then(topArtistsLong => 
    dispatch({
      type: "SET_TOP_ARTISTS_LONG",
      topArtistsLong: topArtistsLong,
    }))
}