import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CreationQuestion from "../../CreationQuestions/CreationQuestion";

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
          isGoodAnswer: true,
        },
        {
          _id: "8784",
          text: "Var",
          isGoodAnswer: false,
        },
        {
          _id: "12345678",
          text: "Toto",
          isGoodAnswer: false,
        },
        {
          _id: "8784",
          text: "Tata",
          isGoodAnswer: false,
        },
      ],
    },
    {
      _id: "47256247",
      numberQuestion: "Q2",
      questionText: "Quels sont les props ?",
      answersList: [
        {
          _id: "98759286",
          text: "réponse 1",
          isGoodAnswer: true,
        },
        {
          _id: "454",
          text: "Réponse 2",
          isGoodAnswer: false,
        },
        {
          _id: "98759286",
          text: "réponse 3",
          isGoodAnswer: false,
        },
        {
          _id: "454",
          text: "Réponse 4",
          isGoodAnswer: false,
        },
      ],
    },
  ],
};

const ButtonQuestionCreation = ({ open, onClose, question }) => {
  if (question) {
    const [form, setForm] = React.useState(question);
  } else {
    const [form, setForm] = React.useState({
      questionText: "",
      answersList: [
        {
          text: "",
          isGoodAnswer: false,
        },
        {
          text: "",
          isGoodAnswer: false,
        },
        {
          text: "",
          isGoodAnswer: false,
        },
        {
          text: "",
          isGoodAnswer: false,
        },
      ],
    });
  }
  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleQuestionTextChange = (e) => {
    setForm({ ...form, questionText: e.target.value });
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className={classes.title} id="responsive-dialog-title">
          {form.title}
        </DialogTitle>
        <DialogContent>
          <CreationQuestion
            question={question}
            onChange={handleQuestionTextChange}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            Annuler
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ButtonQuestionCreation;
