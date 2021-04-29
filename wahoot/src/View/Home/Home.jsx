import React from "react";
import WahootRules from "./Components/WahootRules.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ButtonAdmin from "./Components/ButtonAdmin";
import ButtonJoueur from "./Components/ButtonJoueur";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 65,
    padding: 10,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    margin: 50,
  },
}));

function Home() {
  const classes = useStyles();
  const [form, setForm] = React.useState("[]");
  const [title, setTitle] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const getWahoot = () => {
    axios
      .get("https://wahoot-api.herokuapp.com/wahoot/all")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setForm(data[0]);
      });
  };

  return (
    <div className={classes.block}>
      <Link to="/admin">
        <ButtonAdmin {...form} onClick={getWahoot} />
      </Link>
      <Link to="/home-player">
        <ButtonJoueur />
      </Link>
      <WahootRules />
    </div>
  );
}

export default Home;
