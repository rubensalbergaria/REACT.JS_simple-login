import React, { useState} from "react";
import './App.css';

function App() {

  const username = "Pedro123"
  const password = "password"

  const [userNameState, setUserNameState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);

  const login = () =>{
    if (userNameState === username && passwordState === password){
      setLoggedIn(true)
    }
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <input type="text" onChange={(event) =>{setUserNameState(event.target.value)}}/>     
      <input type="password" onChange={(event) =>{setPasswordState(event.target.value)}}/>     
      <button onClick={login}>Submit</button>

     {loggedIn && (
       <h1>Logged In</h1>
     )} 
    </div>
  );
}

export default App;
