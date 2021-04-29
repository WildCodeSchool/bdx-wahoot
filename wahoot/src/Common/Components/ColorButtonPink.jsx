import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

//test
const ColorButtonPink = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[400],
    width: "120px",
    height: "100px",
    margin: "10px",
    "&:hover": {
      backgroundColor: pink[700],
    },
  },
}))(Button);

export default ColorButtonPink;