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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartGameB from "./View/StartGame/StartGameB";

function App() {
  return (
    <Main>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/wahoot-creation">Création du Wahoot</Link>
            </li>
            <li>
              <Link to="/home-player">Home Joueur</Link>
            </li>
            <li>
              <Link to="/player">Joueur</Link>
            </li>
            <li>
              <Link to="/game-player">Lancer Wahoot</Link>
            </li>
            <li>
              <Link to="/end-game-player">Fin Wahoot</Link>
            </li>
            <li>
              <Link to="/ranking">Classement</Link>
            </li>
            <li>
              <Link to="/answers">Bonnes réponses</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <ListWahoot />
          </Route>
          <Route path="/wahoot-creation">
            <CreationWahoot />
          </Route>
          <Route path="/home-player">
            <PseudoGamer />
          </Route>
          <Route path="/player">
            <ListWahootGamer />
          </Route>
          <Route path="/game-player">
            <StartGameB />
          </Route>
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
    </Router>
    </Main>
  );
}

export default App;
