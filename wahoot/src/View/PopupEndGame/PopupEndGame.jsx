import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopupEndGame = (props) => {
  const [open, setOpen] = useState(true);

  const wahootId = props.match.params.wahootId;
  const [wahoots, setWahoots] = useState([]);
  useEffect(() => {
    axios
      .get(`https://wahoot-api.herokuapp.com/wahoot/${wahootId}`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setWahoots(data);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
            Wahoot terminé!<br />
          Le classement et les réponses aux questionnaire seront disponibles à partir du
          : {wahoots.endDate}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/player">
            <Button onClick={handleClose} color="primary">
              OK!
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupEndGame;
