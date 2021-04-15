import React from 'react';
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from './View/ListWahoot/ListWahoot';
import Home from "./View/Home/Home.jsx";

function App() {
  return (
  <Main>
    {/* <Home />*/}<Home />
    {/*<CreationWahoot /> */}<CreationWahoot />
    {/*<ListWahoot/>*/} <ListWahoot />
     {/* <Login /> */}
  </Main>
  );
}

export default App;
