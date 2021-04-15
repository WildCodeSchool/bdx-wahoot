import React from 'react';
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from './View/ListWahoot/ListWahoot';
import Home from "./View/Home/Home.jsx";
import HomeButtonModal from './View/CreationWahoot/Components/HomeButtonModal';

function App() {
  return (
  <Main>
    {/* <Home />*/}
    {/*<CreationWahoot /> */}
    {/*<ListWahoot/>*/} <ListWahoot />
     {/* <Login /> */}
     <HomeButtonModal/>
  </Main>
  );
}

export default App;
