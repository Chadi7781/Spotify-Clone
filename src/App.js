import './App.css';
import React ,{useEffect,useState} from 'react';
import Login from './components/Login.jsx';
import {getTokenFromUrl} from './config/spotify.jsx';
function App() {

  const [token,setToken] = useState();


  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log("hash===>"+hash);
    window.location.hash = "";
    const _token =  hash.access_token;

    if(_token) {
      setToken(_token);
    }
    console.log("_token===>"+_token);
    


  }, [])

  return (
    <div className="App">
      {token ? <h1>Logged in</h1> : <Login/>}
    </div>
  );
}

export default App;
