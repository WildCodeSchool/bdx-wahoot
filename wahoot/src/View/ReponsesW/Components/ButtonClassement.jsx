import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonClassement = ({ wahootId }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Link to={`/ranking/${wahootId}`}>
          <Button variant="contained" color="primary">
            Retour au classement
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ButtonClassement;
