import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AvailableWahoot from "./Components/AvailableWahoot";
import FinishedWahoot from "./Components/FinishedWahoot";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  content: {
    width: "90%",
    margin: "20px auto",
  },
}));

const ListWahootGamer = () => {
  const classes = useStyle();

  const [wahoots, setWahoots] = useState([]);
  useEffect(() => {
    axios
      .get(`https://wahoot-api.herokuapp.com/wahoot/active`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setWahoots(data[0].data);
      });
  }, []);

  return (
    <div className={classes.content}>
      <AvailableWahoot wahoots={wahoots} />
      <FinishedWahoot wahoots={wahoots} />
    </div>
  );
};

export default ListWahootGamer;
