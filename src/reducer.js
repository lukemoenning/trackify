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
    currentBodyDisplay: 'home',
    user: null,
    playlists: null,
    displayedPlaylist: null,
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

    // Return unmodified state
    default: 
      return state;
  }
};

export default reducer;