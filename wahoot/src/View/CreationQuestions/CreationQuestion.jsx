import React from 'react';
import QuestionInput from './Components/QuestionInput';
import TitleWahoot from './Components/TitleWahoot';
import { makeStyles } from '@material-ui/core/styles';
import Answers from './Components/Answers';
import AddQuestionButton from './Components/AddQuestionButton';
import ButtonCancel from '../CreationWahoot/Components/ButtonCancel';
import ButtonSave from '../CreationWahoot/Components/ButtonSave';


const useStyles = makeStyles((theme) => ({
    
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        marginTop: "30px",

      },
    
    buttons: {
        display: "flex",
        justifyContent: "center",
        
    }
      
  }));
const CreationQuestion = () => {

    const classes = useStyles();

    return (
        <div>
        <div className={classes.container}>
            
            <TitleWahoot />
            <QuestionInput /> 
            <Answers />
            <AddQuestionButton /> 
        </div>
        <div className={classes.buttons}>     
            <ButtonCancel/> 
            <ButtonSave/>
        </div> 
        </div>
    );
}

export default CreationQuestion;