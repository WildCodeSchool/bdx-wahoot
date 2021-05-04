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
import PseudoGamer from "./View/PseudoGamer/PseudoGamer";
import ListWahootGamer from "./View/ListWahootGamer/ListWahootGamer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Main>
        {/* <Switch> */}
        {/* <Route exact path="/" component={Home} />
          <Route path="/admin" component={ListWahoot} />
          <Route path="/wahoot-creation" component={CreationWahoot} />
          <Route path="/home-player" component={PseudoGamer} />
          <Route path="/player" component={ListWahootGamer} />
          <Route path="/game-player/:wahootId" component={StartGame} />
          <Route path="/end-game-player" component={PopupEndGame} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/answers" component={ReponsesW} />
        </Switch>*/}
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/admin">
              <ListWahoot />
            </Route>
            <Route
              path="/wahoot-creation"
              render={(matchProps) => <CreationWahoot {...matchProps} />}
            />

            <Route
              path="/wahoot/:id"
              render={(matchProps) => <CreationWahoot {...matchProps} />}
            />

            <Route path="/home-player">
              <PseudoGamer />
            </Route>
            <Route path="/player" component={ListWahootGamer} />

            <Route path="/game-player/:wahootId" component={StartGame} />

            <Route path="/end-game-player">
              <PopupEndGame />
            </Route>
            <Route path="/ranking">
              <Ranking />
            </Route>
            <Route path="/answers">
              <ReponsesW />
            </Route>
          </Switch>
        </div>
      </Main>
    </Router>
  );
}

export default App;
