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

  p: {
    width: "40px",
    height: "40px",
    lineHeight: "10px",
    textAlign: "center",
    border: "solid 1px black",
    borderRadius: "50%",
  },

  container: {
    display: "flex",
  },
}));

const QuestionInput = ({ value, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            label="Question"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
            value={value}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className={classes.p}>
        <p>1</p>
      </div>
    </div>
  );
};

export default QuestionInput;
