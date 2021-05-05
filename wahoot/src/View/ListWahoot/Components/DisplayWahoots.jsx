import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

const DisplayWahoot = ({getWahoot}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={getWahoot}>
        Afficher les Wahoots!
      </Button>
    </div>
  );
};
export default DisplayWahoot;
