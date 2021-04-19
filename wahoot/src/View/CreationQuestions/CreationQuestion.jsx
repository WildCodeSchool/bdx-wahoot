import React from 'react';
import IncrementationChip from './Components/IncrementationChip';
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
      justifyContent:"flx-start",
    },
    containerbis: {
        display: "flex",
        justifyContent:"center",
      },
  }));
const CreationQuestion = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.containerbis}>
            <TitleWahoot />
            </div>
            <div className={classes.containerbis}>
                <IncrementationChip />
                <QuestionInput /> 
            </div>
            <div className={classes.containerbis}>
                <Answers />
            </div>
            <div className={classes.containerbis}>
                <AddQuestionButton />
            </div>
            <div className={classes.containerbis}>
            <ButtonCancel/> 
            <ButtonSave/>
            </div>
        </div>
    );
}

export default CreationQuestion;