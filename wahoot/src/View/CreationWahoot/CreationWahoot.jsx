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

    block: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 30,
    }
  }));

 

const CreationWahoot = () => {

      
    const classes = useStyles();

    return(
    <div> 
        <div className={classes.block}>
            <MainTitleCreationWahoot />
        </div>
        <div className={classes.block}>
            <TitleCreationWahoot />
        </div>
        <div className={classes.block}>
            <Calendar /> 
        </div>
        <div className={classes.block}>
            <ButtonQuestionCreation />
        </div>
        <div className={classes.block}>
            <QuestionsW/>
        </div>
      {/*<ButtonQuestion/>
        <ButtonHome/>*/}
        <div className={classes.container}>  
            <ButtonCancel/> 
            <ButtonSave/>
        </div>
        
    
    </div>
         
    );
}

export default CreationWahoot;
