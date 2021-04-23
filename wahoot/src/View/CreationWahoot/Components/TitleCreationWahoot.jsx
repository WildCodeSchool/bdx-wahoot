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

const TitleCreationWahoot= ({value, handleChange}) => {
  const classes = useStyles();


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Titre du Wahoot"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          value={value}
          onChange={handleChange}

        />
      </div>
    </form>
  );
}



export default TitleCreationWahoot;