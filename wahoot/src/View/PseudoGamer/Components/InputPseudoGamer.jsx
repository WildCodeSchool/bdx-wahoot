import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const InputPseudoGamer = ({ pseudo, handleChange }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Entrez votre pseudo"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          value={pseudo}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default InputPseudoGamer;
