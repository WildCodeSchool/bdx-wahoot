import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CreationQuestion from "../../CreationQuestions/CreationQuestion";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
  },
}));

const ButtonQuestionCreation = ({
  open,
  onClose,
  question,
  titleQuestion,
  wahootId,
}) => {
  let initialQuestion = {
    questionText: "",
    wahootId: "",
    answerList: [
      {
        text: "",
        isGoodAnswer: false,
      },
      {
        text: "",
        isGoodAnswer: false,
      },
      {
        text: "",
        isGoodAnswer: false,
      },
      {
        text: "",
        isGoodAnswer: false,
      },
    ],
  };

  useEffect(() => {
    if (question) {
      initialQuestion = question;
    }
    setForm({ ...initialQuestion, wahootId: wahootId });
  }, [wahootId]);
  const [form, setForm] = React.useState({});

  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleQuestionTextChange = (e) => {
    setForm({ ...form, questionText: e.target.value });
  };
  const handleAnswerChange = (newAnswers) => {
    setForm({ ...form, answerList: newAnswers });
  };

  const handleOnSave = () => {
    if (question) {
      axios
        .patch(
          `https://wahoot-api.herokuapp.com/questions/${question._id}`,
          form
        )
        .then(() => onClose());
    } else {
      axios
        .post("https://wahoot-api.herokuapp.com/questions", form)
        .then(() => {
          setForm({ ...initialQuestion, wahootId: wahootId });
          onClose();
        });
    }
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open || false}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className={classes.title} id="responsive-dialog-title">
          {titleQuestion}
        </DialogTitle>
        <DialogContent>
          <CreationQuestion
            question={form}
            onChange={handleQuestionTextChange}
            onAnswerChange={handleAnswerChange}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleOnSave} color="primary" autoFocus>
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ButtonQuestionCreation;
