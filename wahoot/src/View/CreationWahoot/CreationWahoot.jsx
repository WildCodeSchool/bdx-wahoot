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
        margin: 15,

    }
  }));

const wahoots = {
    _id: "123456",
    title: "Le php c'est de la balle",
    status: "Terminé",
    endDate: "2022-05-13T22:30",
}

const questions = [
    {
        _id: "ABC",
        numberQuestion: "Q1",
        questionText: "Lequel de ces langages existe ?",
        answersList: [
          {
            _id: "12345678",
            text: "JS",
            isGoodAnswer: true
          },
          {
            _id: "8784",
            text: "Var",
            isGoodAnswer: false
          },
          {
            _id: "12345678",
            text: "Toto",
            isGoodAnswer: false
          },
          {
            _id: "8784",
            text: "Tata",
            isGoodAnswer: false
          }
        ]
      },
      {
        _id: "47256247",
        numberQuestion: "Q2",
        questionText: "Quels sont les props ?",
        answersList: [
          {
            _id: "98759286",
            text: "réponse 1",
            isGoodAnswer: true
          },
          {
            _id: "454",
            text: "Réponse 2",
            isGoodAnswer: false
          },
          {
            _id: "98759286",
            text: "réponse 3",
            isGoodAnswer: false
          },
          {
            _id: "454",
            text: "Réponse 4",
            isGoodAnswer: false
          }
        ]
      }
    ];
 

const CreationWahoot = () => {

    const [form, setForm] = React.useState(wahoots);
    const [date, setDate] = React.useState(wahoots);

const handleTitleChange = (e) => {
  setForm({...form, title:e.target.value});
}

const handleDateChange = (e) => {
  setDate({...date, endDate:e.target.value});
}

    const classes = useStyles();

    return(
    <div> 
        <div className={classes.block}>
            <MainTitleCreationWahoot />
        </div>
        <div className={classes.block}>
            <TitleCreationWahoot value={form.title} handleChange={handleTitleChange}/>
        </div>
        <div className={classes.block}>
            <Calendar value={form.endDate} handleChange={handleDateChange}/> 
        </div>
        <div className={classes.block}>  
                <ButtonQuestionCreation /> 
        </div>
        <div className={classes.block}>
            <QuestionsW/>
        </div>
        <div className={classes.container}>  
            <ButtonCancel/> 
            <ButtonSave/>
        </div>
{/*<ModalQuestions/>*/}
 
    </div>
         
    );
}

export default CreationWahoot;
