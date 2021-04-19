import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
        
      },
    },
  }));

const QuestionInput = () => {

    const classes = useStyles();

    return (
        <div>
            
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                    label="Question"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    size="small"
                    />
                </div>
            </form>
        </div>
    );
}

export default QuestionInput;