
/*=================authEndpoint=========================================*
The authEndpoint is the URL where we need to authenticate using Spotify. 
All Spotify Authentication requests must be passed through this URL.
*=======================================================================*/

export  const authEndPoint = "https://accounts.spotify.com/authorize";


/*=================redirectUri =========================================*
The redirectUri is the one which we gave in the Spotify Web API settings,
 this states where to take back the user if the Spotify login was successful.

*=======================================================================*/
const redirectURL = "http://localhost:3000/";


/*=================clientId =========================================*
The clientId is the Client ID provided to you by the
 Spotify Web API and you need to mention it here.

*=======================================================================*/
const clientId = "b87d03ec7d6741d3b0c0c930472f9c94"


/*=================scopes =========================================*
scopes are basically permissions which you need to ask Spotify for. 
More such permissions are available on Spotify API Documentation.
*=======================================================================*/
const scopes = [

    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
/*=================loginUrl =========================================*
The loginUrl is the final URL which needs to be called in order to authorize an user 
for our Spotify Clone app. 
This URL contains the Client ID and all the permissions so that 
Spotify knows about our app and allows user authentication.
*=======================================================================*/
  export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
      "%20"
      )}&response_type=token&show_dialog=true`