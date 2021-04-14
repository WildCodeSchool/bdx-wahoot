import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const ButtonHome = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
        <IconButton>
          < HomeIcon color="primary" />
        </IconButton>
        </div>
    );
  }

  export default ButtonHome;