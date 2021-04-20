import React from 'react';
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from './View/ListWahoot/ListWahoot';
import Home from "./View/Home/Home.jsx";
import ReponsesW from './View/ReponsesW/ReponsesW';
import PseudoGamer from './View/PseudoGamer/PseudoGamer';

function App() {
  return (
  <Main>
    {/* <Home /> */} 
    {/* <ListWahoot /> */}
    {/* <CreationWahoot /> */}
    {/*<PseudoGamer />*/}
     <ReponsesW />
     {/* <Login /> */}

     
  </Main>
  );
}

export default App;
