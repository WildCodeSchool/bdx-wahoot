import { TextField } from '@material-ui/core';
import React from 'react';
import ButtonQuestionCreation from './Components/ButtonQuestionCreation';
import Calendar from './Components/Calendar';
import MainTitleCreationWahoot from './Components/MainTitleCreationWahoot';
import TitleCreationWahoot from './Components/TitleCreationWahoot';

const CreationWahoot = () => {


    return(
    <div>
        <MainTitleCreationWahoot />
        <TitleCreationWahoot />
        <Calendar /> 
        <ButtonQuestionCreation /> 
    </div>
         
    )


}

export default CreationWahoot;
