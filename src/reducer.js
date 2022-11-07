import SpotifyWebApi from 'spotify-web-api-js';

/**
 * Spotify Web API object
 */
const spotify = new SpotifyWebApi();

/**
 * Data the DataLayer is listening for
 */
export const initialState = {
    spotify: spotify,
    token: null,
    user: null,

    currentBodyDisplay: 'home',
    currentStatsTitle: 'songs',
    currentStatsRange: 'short',
    playlists: null,
    displayedPlaylist: null,


    // USER STATS
    topSongsShort: null,
    topSongsMedium: null,
    topSongsLong: null,
    topArtistsShort: null,
    topArtistsMedium: null,
    topArtistsLong: null,
};

const reducer = (state, action) => {


  switch(action.type) {

    // Return current state with the token updated
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    // Return current state with the user updated
    case "SET_USER":
      return {
        ...state, 
        user: action.user,
      };
    
    // Return current state with the currentBodyDisplay updated
    case "SET_CURRENT_BODY_DISPLAY":
      return {
        ...state, 
        currentBodyDisplay: action.currentBodyDisplay,
      };  

    // Return current state with the playlists updated
    case "SET_PLAYLISTS":
      return {
        ...state, 
        playlists: action.playlists,
      };

    // Return current state with the displayedPlaylist updated
    case "SET_DISPLAYED_PLAYLIST":
      return {
        ...state, 
        displayedPlaylist: action.displayedPlaylist,
      };

    // Return current state with the currentStatsTitle updated
    case "SET_CURRENT_STATS_TITLE":
      return {
        ...state, 
        currentStatsTitle: action.currentStatsTitle,
      };

    // Return current state with the currentStatsRange updated
    case "SET_CURRENT_STATS_RANGE":
      return {
        ...state, 
        currentStatsRange: action.currentStatsRange,
      };



    /** USER STATS */

    // Return current state with the topSongsShort updated
    case "SET_TOP_SONGS_SHORT":
    return {
      ...state, 
      topSongsShort: action.topSongsShort,
    };

    // Return current state with the topSongsMedium updated
    case "SET_TOP_SONGS_MEDIUM":
    return {
      ...state, 
      topSongsMedium: action.topSongsMedium,
    };

    // Return current state with the topSongsLong updated
    case "SET_TOP_SONGS_LONG":
    return {
      ...state, 
      topSongsLong: action.topSongsLong,
    };

    // Return current state with the topArtistsShort updated
    case "SET_TOP_ARTISTS_SHORT":
    return {
      ...state, 
      topArtistsShort: action.topArtistsShort,
    };

    // Return current state with the topArtistsMedium updated
    case "SET_TOP_ARTISTS_MEDIUM":
    return {
      ...state, 
      topArtistsMedium: action.topArtistsMedium,
    };

    // Return current state with the topArtistsLong updated
    case "SET_TOP_ARTISTS_LONG":
    return {
      ...state, 
      topArtistsLong: action.topArtistsLong,
    };
 


    // Return unmodified state
    default: 
      return state;
  }
};

export default reducer;