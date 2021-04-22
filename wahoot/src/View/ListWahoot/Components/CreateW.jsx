import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

const CreateW = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Créer un Wahoot!
      </Button>
    </div>
  );
};
export default CreateW;
