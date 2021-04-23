import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
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
      textAlign: "center",
    },
    "& h3": {
      width: "40px",
      height: "40px",
      textAlign: "center",
      lineHeight: "40px",
      color: "white",
      borderRadius: "50%",
      backgroundColor: " #3932bf",
    },
  },
  inline: {
    display: "inline",
    color: "grey",
  },
}));

const answers = [
  {
    number: "Q1",
    question: "Comment déclare-t-on une variable?",
    rep: "let",
  },
  {
    number: "Q2",
    question: "Quel est le langage back-end?",
    rep: "java",
  },
  {
    number: "Q3",
    question: "Quel est le langage front-end?",
    rep: "javascript",
  },
];

const ListW = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {answers.map((answer) => (
        <div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <h3>{answer.number} </h3>
            </ListItemAvatar>
            <ListItemText
              primary={answer.question}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Bonne réponse : {answer.rep}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
};

export default ListW;
