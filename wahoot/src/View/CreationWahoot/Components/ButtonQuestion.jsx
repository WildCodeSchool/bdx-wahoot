import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  test: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
}));

const numbers = [
  {
    number: "Question 1",
  },
  {
    number: "Question 2",
  },
  {
    number: "Question 3",
  },
  {
    number: "Question 4",
  },
];




const ButtonQuestion = () => {
  const classes = useStyles();

const [questions, setQuestions] = useState(numbers);


  

  return (
    <div className={classes.test}>
      {numbers.map((numb) => (
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<BorderColorIcon />}
          >
            {numb.number}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ButtonQuestion;
