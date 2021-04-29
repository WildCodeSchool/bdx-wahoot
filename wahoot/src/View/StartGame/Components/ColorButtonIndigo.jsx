import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {indigo} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const ColorButtonIndigo = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(indigo[300]),
      backgroundColor: indigo[400],
      width: "120px",
      height: "100px",
      margin: "10px",
      "&:hover": {
        backgroundColor: indigo[700],
      },
    },
  }))(Button);

export default ColorButtonIndigo;