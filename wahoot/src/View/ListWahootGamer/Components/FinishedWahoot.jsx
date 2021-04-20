import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StarsIcon from "@material-ui/icons/Stars";
const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    padding: "15px 0",
    border: "1px solid #3f51b5",
    borderRadius: "10px",
    margin: "20px 10px",
    "& h2": {
      margin: "5px",
    },
  },
  button: {
    margin: theme.spacing(1),
    width: "90%",
    textAlign: "left",
  },
  go: {
    marginLeft: "110px",
  },
}));

const FinishedWahoot = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2>Wahoots terminés</h2>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<StarsIcon className={classes.go}></StarsIcon>}
      >
        Wahoot 1
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<StarsIcon className={classes.go}></StarsIcon>}
      >
        Wahoot 2
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<StarsIcon className={classes.go}></StarsIcon>}
      >
        Wahoot 3
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<StarsIcon className={classes.go}></StarsIcon>}
      >
        Wahoot 4
      </Button>
    </div>
  );
};

export default FinishedWahoot;
