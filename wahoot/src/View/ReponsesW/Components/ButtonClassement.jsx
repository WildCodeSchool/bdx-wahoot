import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
                },
        },
}));


const ButtonClassement= () => {

    const classes = useStyles();

    return (
    <div> 
      <h2>Modification du Wahoot</h2>
    </div>
    <div className={classes.root}>

      <Button variant="contained" color="primary">
        Retour au classement
      </Button>
    </div>
     
    );
    
}
export default ButtonClassement;
