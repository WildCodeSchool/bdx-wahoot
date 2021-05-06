import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  test: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ButtonQuestion = ({ wahootId, open }) => {
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (wahootId && !open) {
      axios
        .get(`https://wahoot-api.herokuapp.com/questions/${wahootId}`)
        .then((response) => {
          setQuestions(response.data);
        });
    }
  }, [open]);

  const handleEditQuestion = () => {};

  return (
    <div className={classes.test}>
      {questions.map((question) => (
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          key={question._id}
          endIcon={<BorderColorIcon />}
        >
          {question.questionText}
        </Button>
      ))}
    </div>
  );
};

export default ButtonQuestion;
