import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
 
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const ButtonQuestion = () => {


  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<BorderColorIcon />}
      >
        Question 1
      </Button>
    </div>
  );
}

export default ButtonQuestion;