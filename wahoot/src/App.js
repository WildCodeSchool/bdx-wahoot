import React from 'react';
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from './View/ListWahoot/ListWahoot';
import Home from "./View/Home/Home.jsx";
import ReponsesW from './View/ReponsesW/ReponsesW';

function App() {
  return (
  <Main>
    {/* <Home /> */}  
    {/* <ListWahoot /> */}  
    {/* <CreationWahoot /> */}
    {/*<ReponesW /> */}  <ReponsesW />
     
     {/* <Login /> */}
     
  </Main>
  );
}

export default App;
