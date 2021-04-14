import { TextField } from '@material-ui/core';
import React from 'react';
import ButtonQuestionCreation from './Components/ButtonQuestionCreation';
import Calendar from './Components/Calendar';
import TitleCreationWahoot from './Components/TitleCreationWahoot';

const CreationWahoot = () => {


    return(
    <div>
        <TitleCreationWahoot />
        <Calendar /> 
        <ButtonQuestionCreation /> 
    </div>
         
    )


}

export default CreationWahoot;
