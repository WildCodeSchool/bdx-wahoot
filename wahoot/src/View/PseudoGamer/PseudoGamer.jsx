import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputPseudoGamer from "./Components/InputPseudoGamer";
import OkGamer from "./Components/OkGamer";

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "40%",
  },
}));

const PseudoGamer = () => {
  const [pseudo, setPseudo] = useState("");
  const handleChange = (event) => {
    setPseudo(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.block}>
        <InputPseudoGamer pseudo={pseudo} handleChange={handleChange} />
      </div>
      <div className={classes.block}>
        <OkGamer pseudo={pseudo} />
      </div>

      {/*<div className={classes.block}><WahootRules /></div>*/}
    </div>
  );
};

export default PseudoGamer;
