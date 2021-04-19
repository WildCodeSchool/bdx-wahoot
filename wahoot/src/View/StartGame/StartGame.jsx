import React from 'react';
import CounterQuestions from './Components/CounterQuestions';
import QuestionsPlayer from './Components/QuestionsPlayer';
import ResponsesPlayer from './Components/ResponsesPlayer';
import Timer from './Components/Timer';
import TitlePlayer from './Components/TitlePlayer';


const StartGame = () => {
    return(
        <div>
            <div><TitlePlayer /></div>
            <p><QuestionsPlayer /></p>
            <div><CounterQuestions /></div>
            <div><Timer /></div>
            <div><ResponsesPlayer /></div>

        </div>
    )
};

export default StartGame;