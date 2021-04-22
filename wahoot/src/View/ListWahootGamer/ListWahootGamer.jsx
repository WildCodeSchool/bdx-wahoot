import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AvailableWahoot from "./Components/AvailableWahoot";
import FinishedWahoot from "./Components/FinishedWahoot";

const useStyle = makeStyles((theme) => ({
  content: {
    width: "90%",
    margin: "20px auto",
  },
}));

const ListWahootGamer = () => {
  const classes = useStyle();
  return (
    <div className={classes.content}>
      <AvailableWahoot />
      <FinishedWahoot />
    </div>
  );
};

export default ListWahootGamer;
