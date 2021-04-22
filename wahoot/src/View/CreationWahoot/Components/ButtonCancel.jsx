import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

 
const ButtonCancel = () => {


  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Button variant="contained" color="primary">
        Annuler
      </Button>
    </div>
  );
}
export default ButtonCancel;