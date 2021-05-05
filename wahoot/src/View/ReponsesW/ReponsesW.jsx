import React from "react";
import ButtonClassement from "./Components/ButtonClassement";
import ListW from "./Components/ListW";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  block: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 15,
  },
}));

const ReponsesW = (props) => {
  const classes = useStyles();
  console.log(props.match.params.wahootId);

  return (
    <div className={classes.block}>
      <h2>Titre du Wahoot</h2>
      <ListW wahootId={props.match.params.wahootId} />
      <ButtonClassement wahootId={props.match.params.wahootId} />
    </div>
  );
};
export default ReponsesW;
