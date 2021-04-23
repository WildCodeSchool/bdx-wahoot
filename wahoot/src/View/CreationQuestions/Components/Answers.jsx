import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  deepPurple,
  indigo,
  pink,
  teal,
} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SwitchRightAnswer from "./SwitchRightAnswer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline",
    justifyContent: "center",
    width: "120px",
    height: "100px",
    margin: "10px",
  },
}));

const ColorButtonIndigo = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[300]),
    backgroundColor: indigo[400],
    "&:hover": {
      backgroundColor: indigo[700],
    },
  },
}))(Button);

const ColorButtonTeal = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[300],
    "&:hover": {
      backgroundColor: teal[700],
    },
  },
}))(Button);

const ColorButtonDeepPurple = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[400],
    "&:hover": {
      backgroundColor: deepPurple[700],
    },
  },
}))(Button);

const ColorButtonPink = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[400],
    "&:hover": {
      backgroundColor: pink[700],
    },
  },
}))(Button);



const Answers = ({ answerBis }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openone, setOpenone] = React.useState(false);
  const [opentwo, setOpentwo] = React.useState(false);
  const [openthree, setOpenthree] = React.useState(false);
  const [answer, setAnswer] = React.useState("Ajouter une réponse");
  const [answerone, setAnswerOne] = React.useState("Ajouter une réponse");
  const [answertwo, setAnswerTwo] = React.useState("Ajouter une réponse");
  const [answerthree, setAnswerThree] = React.useState("Ajouter une réponse");

  const handleChangeAnswer = (event) => {
    setAnswer(event.target.value);
    //setAnswer(wahoots.questions.answersList.text)
  };
  const handleChangeAnswerOne = (event) => {
    setAnswerOne(event.target.value);
  };
  const handleChangeAnswerTwo = (event) => {
    setAnswerTwo(event.target.value);
  };
  const handleChangeAnswerThree = (event) => {
    setAnswerThree(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenOne = () => {
    setOpenone(true);
  };

  const handleCloseOne = () => {
    setOpenone(false);
  };

  const handleClickOpenTwo = () => {
    setOpentwo(true);
  };

  const handleCloseTwo = () => {
    setOpentwo(false);
  };

  const handleClickOpenThree = () => {
    setOpenthree(true);
  };

  const handleCloseThree = () => {
    setOpenthree(false);
  };

  return (
    <div>
      <ColorButtonIndigo
        className={classes.container}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        {answer}
      </ColorButtonIndigo>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Réponse"
            type="text"
            fullWidth
            value={answer}
            // value={answerBis.text}
            // name={`text_${answerBis._id}`}
            onChange={handleChangeAnswer}
          />
          <SwitchRightAnswer />
          {/* <button>{answerBis.isGoodAnswer ? "oui" : "non"}</button> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleClose} color="primary">
            Valider
          </Button>
        </DialogActions>
      </Dialog>
      <ColorButtonTeal
        className={classes.container}
        variant="contained"
        color="primary"
        onClick={handleClickOpenOne}
      >
        {answerone}
      </ColorButtonTeal>
      <Dialog
        open={openone}
        onClose={handleCloseOne}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Réponse"
            type="text"
            fullWidth
            value={answerone}
            onChange={handleChangeAnswerOne}
          />
          <SwitchRightAnswer />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOne} color="primary">
            Annuler
          </Button>
          <Button onClick={handleCloseOne} color="primary">
            Valider
          </Button>
        </DialogActions>
      </Dialog>
      <ColorButtonDeepPurple
        className={classes.container}
        variant="contained"
        color="primary"
        onClick={handleClickOpenTwo}
      >
        {answertwo}
      </ColorButtonDeepPurple>
      <Dialog
        open={opentwo}
        onClose={handleCloseTwo}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Réponse"
            type="text"
            fullWidth
            value={answertwo}
            onChange={handleChangeAnswerTwo}
          />
          <SwitchRightAnswer />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTwo} color="primary">
            Annuler
          </Button>
          <Button onClick={handleCloseTwo} color="primary">
            Valider
          </Button>
        </DialogActions>
      </Dialog>
      <ColorButtonPink
        className={classes.container}
        variant="contained"
        color="primary"
        onClick={handleClickOpenThree}
      >
        {answerthree}
      </ColorButtonPink>
      <Dialog
        open={openthree}
        onClose={handleCloseThree}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Réponse"
            type="text"
            fullWidth
            value={answerthree}
            onChange={handleChangeAnswerThree}
          />
          <SwitchRightAnswer />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseThree} color="primary">
            Annuler
          </Button>
          <Button onClick={handleCloseThree} color="primary">
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Answers;
