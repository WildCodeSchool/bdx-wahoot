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
import { makeStyles } from "@material-ui/core/styles";
import ButtonQuestionCreation from "./View/CreationWahoot/Components/ButtonQuestionCreation";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    listStyleType: "none",
  },
}));

function App() {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    titleWahoot: "hello",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Router>
      <Main>
        <div>
          {/* <nav>
          <ul>
            <li>
              <Link className={classes.link} to="/"> Home</Link>
            </li>
            <li>
              <Link className={classes.link} to="/admin">Admin</Link>
            </li>
            <li>
              <Link className={classes.link} to="/wahoot-creation">Création du Wahoot</Link>
            </li>
            <li>
              <Link className={classes.link} to="/home-player">Home Joueur</Link>
            </li>
            <li>
              <Link className={classes.link} to="/player">Joueur</Link>
            </li>
            <li>
              <Link className={classes.link} to="/game-player">Lancer Wahoot</Link>
            </li>
            <li>
              <Link className={classes.link} to="/end-game-player">Fin Wahoot</Link>
            </li>
            <li>
              <Link className={classes.link} to="/ranking">Classement</Link>
            </li>
            <li>
              <Link className={classes.link} to="/answers">Bonnes réponses</Link>
            </li>
          </ul>
        </nav> */}

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
