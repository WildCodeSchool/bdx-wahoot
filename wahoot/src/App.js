import React from 'react';
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from './View/ListWahoot/ListWahoot';
import Home from "./View/Home/Home.jsx";
import CreationQuestion from './View/CreationQuestions/CreationQuestion';
import PseudoGamer from './View/PseudoGamer/PseudoGamer';


function App() {
  return (
  <Main>
    {/* <Home /> */} 
    {/* <ListWahoot /> */}
    {/* <CreationWahoot /> */}
    {/* <CreationQuestion /> */}<CreationQuestion />
    {/* <CreationQuestion /> */}

     
     {/* <Login /> */}

     
  </Main>
  );
}

export default App;
