import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

const CreateW = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/wahoot-creation"><Button variant="contained" color="primary">
        Créer un Wahoot!
      </Button></Link>
    </div>
  );
};
export default CreateW;
