import React from 'react';
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from './View/ListWahoot/ListWahoot';
import Home from "./View/Home/Home.jsx";
import StartGame from './View/StartGame/StartGame';
import PopupEndGame from './View/PopupEndGame/PopupEndGame';
import Ranking from './View/Ranking/Ranking';

function App() {
  return (
  <Main>
    {/* <Home /> */} 
    {/* <ListWahoot /> */}
    {/* <CreationWahoot /> */}
    {/* <StartGame /> */}<StartGame />
    {/* <PopupEndGame /> */}<PopupEndGame />
    {/* <Ranking /> */}<Ranking />
     
  </Main>
  );
}

export default App;
