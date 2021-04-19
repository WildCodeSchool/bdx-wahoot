import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SwitchRightAnswer from './SwitchRightAnswer';




const useStyles = makeStyles((theme) => ({
    container: {
        display: "inline",
        justifyContent: "center",
        width: "120px",
        height: "100px",
        margin: "10px",

    }
      
}));

const Answers = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
  };

    const handleClose = () => {
    setOpen(false);
  };

   
    return (
        <div>
            <Button className={classes.container} variant="contained" color="primary" onClick={handleClickOpen}>
                Ajouter une réponse
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Réponse"
                    type="text"
                    fullWidth
                />
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
            <Button className={classes.container} variant="contained" color="primary" onClick={handleClickOpen}>
                Ajouter une réponse
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Réponse"
                    type="text"
                    fullWidth
                />
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
            <Button className={classes.container} variant="contained" color="primary" onClick={handleClickOpen}>
                Ajouter une réponse
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Réponse"
                    type="text"
                    fullWidth
                />
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
            <Button className={classes.container} variant="contained" color="primary" onClick={handleClickOpen}>
                Ajouter une réponse
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Réponse"
                    type="text"
                    fullWidth
                />
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
        </div>
    );
}

export default Answers;