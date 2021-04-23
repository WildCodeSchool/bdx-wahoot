import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  
const ButtonSave = () => {


  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Link to="/admin"><Button variant="contained" color="primary">
        Enregistrer
      </Button></Link>
    </div>
  );
}
export default ButtonSave;