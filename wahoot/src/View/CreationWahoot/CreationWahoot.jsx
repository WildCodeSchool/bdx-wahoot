import { TextField } from '@material-ui/core';
import React from 'react';
import ButtonQuestionCreation from './Components/ButtonQuestionCreation';
import Calendar from './Components/Calendar';
import MainTitleCreationWahoot from './Components/MainTitleCreationWahoot';
import TitleCreationWahoot from './Components/TitleCreationWahoot';
import ButtonCancel from "./Components/ButtonCancel";
import ButtonSave from "./Components/ButtonSave";
import QuestionsW from "./Components/QuestionsW";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent:"center",
    },
  }));

const CreationWahoot = () => {

      
    const classes = useStyles();

    return(
    <div>
        <MainTitleCreationWahoot />
        <TitleCreationWahoot />
        <Calendar /> 
        <ButtonQuestionCreation /> 
        <QuestionsW/>
        <div className={classes.container}>  
            <ButtonCancel/> 
            <ButtonSave/>
        </div>
        
    
    </div>
         
    );
}

export default CreationWahoot;
