import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputPseudoGamer from "./Components/InputPseudoGamer";
import OkGamer from "./Components/OkGamer";
import UserContext from "../../context/user";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20%",
  },
}));

const PseudoGamer = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const wahootUser = JSON.parse(localStorage.getItem("wahootUser"));
    if (wahootUser) {
      setUser(wahootUser);
      history.push("/player");
    }
  }, []);

  const handleChange = (event) => {
    setUser({ ...user, name: event.target.value });
    localStorage.setItem(
      "wahootUser",
      JSON.stringify({ ...user, name: event.target.value })
    );
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.block}>
        <InputPseudoGamer user={user.name} handleChange={handleChange} />
      </div>
      <div className={classes.block}>
        <OkGamer pseudo={user.name} />
      </div>
    </div>
  );
};

export default PseudoGamer;
