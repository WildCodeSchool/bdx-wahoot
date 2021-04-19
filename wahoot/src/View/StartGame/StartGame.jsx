import React from 'react';
import QuestionsPlayer from './Components/QuestionsPlayer';
import TitlePlayer from './Components/TitlePlayer';


const StartGame = () => {
    return(
        <div>
            <div><TitlePlayer /></div>
            <p><QuestionsPlayer /></p>
        </div>
    )
};

export default StartGame;