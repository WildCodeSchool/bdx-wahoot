import React from "react";
import QuestionInput from "./Components/QuestionInput";
import { makeStyles } from "@material-ui/core/styles";
import Answers from "./Components/Answers";
import AddQuestionButton from "./Components/AddQuestionButton";
import ButtonCancel from "../CreationWahoot/Components/ButtonCancel";
import ButtonSave from "../CreationWahoot/Components/ButtonSave";
import QuestionsPlayer from "../StartGame/Components/QuestionsPlayer";
import TitleCreationWahoot from "../CreationWahoot/Components/TitleCreationWahoot";
import { DialogTitle } from "@material-ui/core";
import AnswerTest from "./Components/AnswerTest";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
  },
}));
const CreationQuestion = ({ question, onChange, onAnswerChange }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <QuestionInput
          questionText={question.questionText}
          onChange={onChange}
        />
        
        <AnswerTest answers={question.answerList} onChange={onAnswerChange} />
        
      </div>
    </div>
  );
};

export default CreationQuestion;
