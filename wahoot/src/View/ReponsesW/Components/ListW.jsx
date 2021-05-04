import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
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



const ListW = () => {
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://wahoot-api.herokuapp.com/questions/60881f8e681398caa0dc72c7`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  // const goodAnswer = questions.filter(
  //   (question) => question.answerList.isGoodAnswer == "true"
  //

  return (
    <List className={classes.root}>
      {questions.map((question, index) => (
        <div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <h3>{index + 1} </h3>
            </ListItemAvatar>
            <ListItemText
              primary={question.questionText}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Bonne réponse :
                    {
                      question.answerList.find(
                        (answer) => answer.isGoodAnswer === true
                      ).text
                    }
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
