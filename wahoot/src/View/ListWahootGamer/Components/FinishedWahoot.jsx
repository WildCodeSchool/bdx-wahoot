import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StarsIcon from "@material-ui/icons/Stars";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    padding: "15px 0",
    width: "100%",
    maxWidth: "36ch",
    margin: "10px auto",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(30px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
    borderRadius: "10px",
    webki: "10px",
    color: "rgb(31, 31, 31)",
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

const wahoots = [
  {
    title: "Wahoot 1",
  },
  {
    title: "Wahoot 2",
  },
  {
    title: "Wahoot 3",
  },
  {
    title: "Wahoot 4",
  },
];

const FinishedWahoot = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2>Wahoots terminés</h2>
      {wahoots.map((wahoot) => (
        <Link to="/ranking">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<StarsIcon className={classes.go}></StarsIcon>}
          >
            {wahoot.title}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default FinishedWahoot;
