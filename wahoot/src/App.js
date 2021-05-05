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
              path="/wahoot-edition/:id"
              render={(matchProps) => <CreationWahoot {...matchProps} />}
            />
            <Route path="/home-player">
              <PseudoGamer />
            </Route>
            <Route path="/player" component={ListWahootGamer} />

            <Route path="/game-player/:wahootId" component={StartGame} />

            <Route path="/end-game-player/:wahootId" component={PopupEndGame} />

            <Route path="/ranking/:wahootId" component={Ranking} />
            {/* <Ranking />
            </Route> */}

            <Route path="/answers/:wahootId" component={ReponsesW} />
            {/* <Route path="/answers">
              <ReponsesW />
            </Route> */}
          </Switch>
        </div>
      </Main>
    </Router>
  );
}

export default App;
