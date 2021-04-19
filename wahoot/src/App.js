import React from 'react';
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from './View/ListWahoot/ListWahoot';
import Home from "./View/Home/Home.jsx";
import StartGame from './View/StartGameQuestions/StartGame';

function App() {
  return (
  <Main>
    {/* <Home /> */} 
    {/* <ListWahoot /> */}
    {/* <CreationWahoot /> */}
     <StartGame />
     {/* <Login /> */}
     
  </Main>
  );
}

export default App;
