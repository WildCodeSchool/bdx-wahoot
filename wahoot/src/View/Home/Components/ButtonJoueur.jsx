import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
                },
        },
}));

const ButtonJoueur =() => {

    const classes = useStyles();

    return (

    <div className={classes.root}>

      <Button className="joueur" variant="contained" color="primary">
        Joueur
      </Button>
    </div>
    );
    
}
export default ButtonJoueur;