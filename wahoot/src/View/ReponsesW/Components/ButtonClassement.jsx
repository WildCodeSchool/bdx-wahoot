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
     <div className={classes.root}>

      <Button variant="contained" color="primary">
        Retour au classement
      </Button>
      </div>
    </div>
     
    );
    
}
export default ButtonClassement;
