import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ColorButtonIndigo from '../StartGame/Components/ColorButtonIndigo';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopupEndGame = ({pseudo})=>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ColorButtonIndigo variant="contained" color="primary" onClick={handleClickOpen}>
       dernière réponse 
        </ColorButtonIndigo>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Wahoot terminé! 
            <p>Revenez plus tard pour voir ton résultat! </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/player"><Button onClick={handleClose} color="primary">
            Fermer
          </Button></Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default PopupEndGame;