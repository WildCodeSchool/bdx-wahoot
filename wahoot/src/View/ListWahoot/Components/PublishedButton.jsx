import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DoneIcon from '@material-ui/icons/Done';
import axios from 'axios';

function PublishedButton({ wahootId }) {
  //publier le questionnaire
  const handleOnSave = () => {
    axios
      .patch(`https://wahoot-api.herokuapp.com/wahoot/${wahootId}`, { status: "published" })
      .then(() => setOpen(false));
  };

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')} ><DoneIcon /></Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title"></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          ><p>Voulez-vous vraiment publier ce
          questionnaire ?</p>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleOnSave} >
            Oui
          </Button>
          <Button onClick={handleClose} color="secondary">
            Non
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default PublishedButton;