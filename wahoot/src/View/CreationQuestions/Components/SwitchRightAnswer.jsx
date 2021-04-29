import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green, grey } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Badge, makeStyles } from "@material-ui/core";

const GreenSwitch = withStyles({
  switchBase: {
    color: grey[300],
    "&$checked": {
      color: green[700],
    },
    "&$checked + $track": {
      backgroundColor: green[900],
    },
  },
  checked: {},
  track: {},
})(Switch);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const SwitchRightAnswer = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    const checked= true;
    setState({ ...state, checkedA:true });
  };

  // const [invisible, setInvisible] = React.useState(false);
  // const handleBadgeVisibility = () => {
  //   setInvisible(!invisible);
  // };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <GreenSwitch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              
             
              //checked={invisible}
              //onChange={handleBadgeVisibility}
            />
          }
          label="Bonne réponse"
        />
        <Badge
          color="secondary"
          variant="standard"
          //invisible={!invisible}
        ></Badge>
      </FormGroup>
    </div>
  );
};

export default SwitchRightAnswer;
