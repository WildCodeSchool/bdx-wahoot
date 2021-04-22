import React from "react";
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

function App() {
  return (
    <Main>
      {/* <Home /> */}
      {/* <ListWahoot /> */}<ListWahoot />
      {/* <CreationWahoot /> */}
      {/* <StartGame /> */}
      {/* <PopupEndGame /> */}
      {/* <Ranking /> */}
      {/* <CreationWahoot /> */}
      {/* <CreationQuestion /> */}
      {/* <PseudoGamer /> */}
      {/*<ListWahootGamer />*/}

      {/* <Login /> */}
    </Main>
  );
}

export default App;
