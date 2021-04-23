import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Calendar from '../CreationWahoot/Components/Calendar';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PopupEndGame = () => {
    const classes = useStyles();
    
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2>Wahoot terminé !</h2>
        <p>
        Le classement et les réponses au questionnaire seront disponibles à partir du 
<Calendar />
        </p>
        <Button onClick={handleClose}>OK !</Button>
      </div>
    );
  
    return (
      <div>
        <button type="button" onClick={handleOpen}>
          Fin du Wahoot
          {/* Fin questions (à supp ça et relier à la dernière réponse choisie) */}
        </button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          {body}
        </Modal>
      </div>
    );
  }

export default PopupEndGame;