import SpotifyWebApi from 'spotify-web-api-js';
import { INITIALSTATSTITLE, INITIALSTATSRANGE, INITIALBODYDISPLAY } from './assets/constants/constants';

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
    currentBodyDisplay: INITIALBODYDISPLAY,
    playlists: null,
    displayedPlaylist: null,


    // USER STATS
    topTracksShort: null,
    topTracksMedium: null,
    topTracksLong: null,
    topArtistsShort: null,
    topArtistsMedium: null,
    topArtistsLong: null,

    currentStatsTitle: INITIALSTATSTITLE,
    currentStatsRange: INITIALSTATSRANGE,

    // HOME CONTENT
    featuredPlaylists: null,
    newReleases: null,
    recentlyPlayedTracks: null,

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

    // Return current state with the topTracksShort updated
    case "SET_TOP_TRACKS_SHORT":
    return {
      ...state, 
      topTracksShort: action.topTracksShort,
    };

    // Return current state with the topTracksMedium updated
    case "SET_TOP_TRACKS_MEDIUM":
    return {
      ...state, 
      topTracksMedium: action.topTracksMedium,
    };

    // Return current state with the topTracksLong updated
    case "SET_TOP_TRACKS_LONG":
    return {
      ...state, 
      topTracksLong: action.topTracksLong,
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


    /** HOME CONTENT */

    // Return current state with the featuredPlaylists updated
    case "SET_FEATURED_PLAYLISTS":
    return {
      ...state, 
      featuredPlaylists: action.featuredPlaylists,
    };

    // Return current state with the newReleases updated
    case "SET_NEW_RELEASES":
    return {
      ...state, 
      newReleases: action.newReleases,
    };

    // Return current state with the recentlyPlayedTracks updated
    case "SET_RECENTLY_PLAYED_TRACKS":
    return {
      ...state, 
      recentlyPlayedTracks: action.recentlyPlayedTracks,
    };
 


    // Return unmodified state
    default: 
      return state;
  }
};

export default reducer;