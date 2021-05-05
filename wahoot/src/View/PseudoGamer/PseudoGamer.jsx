import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputPseudoGamer from "./Components/InputPseudoGamer";
import OkGamer from "./Components/OkGamer";
import UserContext from "../../context/user";

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20%",
  },
}));

const PseudoGamer = () => {
  const [pseudo, setPseudo] = useState("");
  const { user } = UserContext(UserContext);

  const handleChange = (event) => {
    setPseudo(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.block}>
        <InputPseudoGamer user={pseudo} handleChange={handleChange} />
      </div>
      <div className={classes.block}>
        <OkGamer user={pseudo} />
      </div>
    </div>
  );
};

export default PseudoGamer;
