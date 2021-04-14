import { TextField } from '@material-ui/core';
import React from 'react';
import ButtonQuestionCreation from './Components/ButtonQuestionCreation';
import Calendar from './Components/Calendar';
import MainTitleCreationWahoot from './Components/MainTitleCreationWahoot';
import TitleCreationWahoot from './Components/TitleCreationWahoot';
import ButtonCancel from "./Components/ButtonCancel";
import ButtonQuestion from "./Components/ButtonQuestion";
import ButtonSave from "./Components/ButtonSave";
import QuestionsW from "./Components/QuestionsW";

const CreationWahoot = () => {


    return(
    <div>
        <MainTitleCreationWahoot />
        <TitleCreationWahoot />
        <Calendar /> 
        <ButtonQuestionCreation /> 
        <QuestionsW/>
        <ButtonSave/>
        <ButtonCancel/>  
        <ButtonQuestion/>
        
    
    </div>
         
    );
}

export default CreationWahoot;
