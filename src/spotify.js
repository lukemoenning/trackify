/**
 * The base URL for the Spotify authrozation URL.
 */
const authorizationEndpoint = "https://accounts.spotify.com/authorize";

/**
* The URL the Spotify authorization will redirect to after it is complete.
*/
const redirectURI = "http://localhost:3000/";

/**
* A unique Client ID which is linked to the project on Spotfiy for Developers.
*/
const clientID = "5fe24f726a784ced9a2133098d1b6db1";

/**
* The scopes for which the access code will authorize access for. 
*/
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

/**
* The URL to login with Spotify.
*/
export const loginURL = `${authorizationEndpoint}` +
  `?client_id=${clientID}` +
  `&redirect_uri=${redirectURI}` +
  `&scope=${scopes.join("%20")}` +
  `&response_type=token` +
  `&show_dialog=true`; 

/**
* Gets the access token from the URL after the Spotfiy authorization is complete.
* 
* @returns {string} Spotify access token
*/
export const getAccessTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};