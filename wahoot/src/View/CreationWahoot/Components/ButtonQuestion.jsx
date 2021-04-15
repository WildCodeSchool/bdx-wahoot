import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
 
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    test: {
      display: "flex",
      flexDirection: "column",
    }
  }));

const ButtonQuestion = () => {


  const classes = useStyles();

  return (
    <div className={classes.test}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<BorderColorIcon />}
      >
        Question 1
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<BorderColorIcon />}
      >
        Question 2
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<BorderColorIcon />}
      >
        Question 3
      </Button>
    </div>
  );
}

export default ButtonQuestion;