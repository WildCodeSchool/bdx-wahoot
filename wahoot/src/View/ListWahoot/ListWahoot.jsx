import React from "react";
import CreateW from "./Components/CreateW.jsx";
import ListAffichageW from "./Components/ListAffichageW.jsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    width: "90%",
    margin: "20px auto",
  },
  /*container: {
    display: "flex",
    justifyContent: "center",
  },
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 30,
  },*/
}));

const ListWahoot = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <CreateW />
      <ListAffichageW />
    </div>
  );
};

export default ListWahoot;
