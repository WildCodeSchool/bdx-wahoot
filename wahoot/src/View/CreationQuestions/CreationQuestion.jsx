import React, { useState } from "react";
import QuestionInput from "./Components/QuestionInput";
import { formatMs, makeStyles } from "@material-ui/core/styles";
import Answers from "./Components/Answers";
import AddQuestionButton from "./Components/AddQuestionButton";
import ButtonCancel from "../CreationWahoot/Components/ButtonCancel";
import ButtonSave from "../CreationWahoot/Components/ButtonSave";
import QuestionsPlayer from "../StartGame/Components/QuestionsPlayer";
import TitleCreationWahoot from "../CreationWahoot/Components/TitleCreationWahoot";
import { DialogTitle } from "@material-ui/core";

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
        <Answers answers={question.answersList} onChange={onAnswerChange} />
        {/* {question.answersList.map((answer, index) => (
          <Answers
            answerBis={answer}
            onTextChange={() => {}}
            onStatusChange={() => {}}
          />
        ))} */}
        {/* <AddQuestionButton /> */}
      </div>
      {/* <div className={classes.buttons}>     
                <ButtonCancel/> 
                <ButtonSave/>
            </div>  */}
    </div>
  );
};

export default CreationQuestion;
