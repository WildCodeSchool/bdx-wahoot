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

const ButtonQuestionCreation = ()=> {
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
         <CreationQuestion />
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