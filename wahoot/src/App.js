import React, { Component } from "react";
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import ListWahoot from "./View/ListWahoot/ListWahoot";
import Home from "./View/Home/Home.jsx";
import StartGame from "./View/StartGame/StartGame";
import PopupEndGame from "./View/PopupEndGame/PopupEndGame";
import Ranking from "./View/Ranking/Ranking";
import ReponsesW from "./View/ReponsesW/ReponsesW";
import CreationQuestion from "./View/CreationQuestions/CreationQuestion";
import PseudoGamer from "./View/PseudoGamer/PseudoGamer";
import ListWahootGamer from "./View/ListWahootGamer/ListWahootGamer";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ModificationW from "./View/ModificationWahoot/ModificationW";

function App() {
  return (
    
     <Main>
      {/* <Home /> */} 
      {/* <ListWahoot /> */}
      {/* <CreationWahoot /> */}
      {/* <ModificationW /> */} <ModificationW />
      {/* <StartGame /> */}
      {/* <PopupEndGame /> */}
      {/* <Ranking /> */}
      {/*<PseudoGamer />*/}
      {/*<ReponsesW />*/}
      {/* <CreationQuesion /> */}
      {/*<ListWahootGamer />*/}
      {/* <Login /> */}
    </Main>
  );
}

export default App;
