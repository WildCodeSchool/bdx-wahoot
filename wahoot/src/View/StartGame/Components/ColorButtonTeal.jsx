import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {teal} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const ColorButtonTeal = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[300],
    width: "120px",
    height: "100px",
    margin: "10px",
    "&:hover": {
      backgroundColor: teal[700],
    },
  },
}))(Button);

export default ColorButtonTeal;