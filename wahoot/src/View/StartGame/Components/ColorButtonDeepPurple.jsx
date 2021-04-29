import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const ColorButtonDeepPurple = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[400],
        width: "120px",
        height: "100px",
        margin: "10px",
        "&:hover": {
          backgroundColor: deepPurple[700],
        },
      },
    }))(Button);

export default ColorButtonDeepPurple;