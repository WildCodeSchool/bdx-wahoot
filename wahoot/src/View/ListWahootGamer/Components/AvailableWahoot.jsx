import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    padding: "15px 0",
    margin: "20px 10px",
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: "primary.main",
    margin: "10px auto",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(30px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
    borderRadius: "10px",
    webki: "10px",
    color: "rgb(31, 31, 31)",
    textAlign: "center",

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

const AvailableWahoot = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2>Wahoots disponibles</h2>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<SendIcon className={classes.go}></SendIcon>}
      >
        Wahoot 5
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<SendIcon className={classes.go}></SendIcon>}
      >
        Wahoot 6
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<SendIcon className={classes.go}></SendIcon>}
      >
        Wahoot 7
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<SendIcon className={classes.go}></SendIcon>}
      >
        Wahoot 8
      </Button>
    </div>
  );
};

export default AvailableWahoot;
