import React from 'react';
import CounterQuestions from './Components/CounterQuestions';
import QuestionsPlayer from './Components/QuestionsPlayer';
import ResponsesPlayer from './Components/ResponsesPlayer';
import Timer from './Components/Timer';
import TitlePlayer from './Components/TitlePlayer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    block: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
  }));

const StartGame = () => {
 
    const classes = useStyles();
    return(
        <div className={classes.block}>
            <TitlePlayer />
            <QuestionsPlayer />
            {/* <CounterQuestions /> */}
           <p> <Timer /> </p>
            <ResponsesPlayer /> 
        </div>
    )
};

export default StartGame;