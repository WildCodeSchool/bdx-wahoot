import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CreationQuestion from '../../CreationQuestions/CreationQuestion';

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
  },
}));


const wahoots = {
  _id: "123456",
  title: "Le JS c'est de la balle",
  status: "Terminé",
  endDate: "20/04/2021",
  questions: [
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
  ]
};

const ButtonQuestionCreation = ()=> {
  const [form, setForm] = React.useState(wahoots);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Créer une question
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className={classes.title} id="responsive-dialog-title">{"Titre du Wahoot"}</DialogTitle>
        <DialogContent>
        {form.questions?.map((question) => (
         <CreationQuestion question={question}/>
         ))}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ButtonQuestionCreation;