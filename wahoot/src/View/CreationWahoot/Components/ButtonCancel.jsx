import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { Link } from "react-router-dom";



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
    
    <Link to="/admin">  <Button variant="contained" color="primary">
        Annuler
      </Button></Link>
    </div>
  );
}
export default ButtonCancel;