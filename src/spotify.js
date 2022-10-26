const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const redirectURI = "http://localhost:3000/";
const clientID = "5fe24f726a784ced9a2133098d1b6db1";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginURL = `${authorizationEndpoint}` +
    `?client_id=${clientID}` +
    `&redirect_uri=${redirectURI}` +
    `&scope=${scopes.join("%20")}` +
    `&response_type=token` +
    `&show_dialog=true`; 

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