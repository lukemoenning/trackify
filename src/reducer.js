/**
 * Data the DataLayer is listening for
 */
export const initialState = {

    token: null,

    /**CHANGE BACK TO NULL AFTER DEVELOPMENT */
    // token: 'BQAeZdi6s89RI8Ug5o2ctfXLO24moYZNd9_M0NSMbCOUhT7rn7bNikwBGAxd5WiQFXSWNt7hQaHb3t1EZiWadgXXsiFGMG-RdtM9U4S7pXCRD1Q9HCmMJ5azb4gUgNN2GaInpJttKaSwqJZaGzSILRaaEToeaVJCJb4eH-wThJDQxpX2jBltf1x6iM',
    
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