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
            <div><TitlePlayer /></div>
            <p><QuestionsPlayer /></p>
            <div><CounterQuestions /></div>
            <div><Timer /></div>
            <div><ResponsesPlayer /></div>
        </div>
    )
};

export default StartGame;