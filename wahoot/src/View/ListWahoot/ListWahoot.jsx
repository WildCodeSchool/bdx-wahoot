import React, { useEffect } from "react";
import CreateW from "./Components/CreateW.jsx";
import { makeStyles } from "@material-ui/core/styles";
import CardsWahootList from "./Components/CardsWahootList.jsx";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  content: {
    width: "90%",
    margin: "20px auto",
  },
  /*container: {
    display: "flex",
    justifyContent: "center",
  },
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 30,
  },*/
}));

const ListWahoot = () => {
  const classes = useStyles();
  const [form, setForm] = React.useState([]);

  const deleteWahoot = (wahootId) => {
    axios
      .delete(`https://wahoot-api.herokuapp.com/wahoot/${wahootId}`)
      .then(() => {
        //console.log("Delete Wahoot" + wahootId);
        const filteredWahoot = form.filter((wahoot) => wahoot._id !== wahootId);
        setForm(filteredWahoot);
        console.log("Wahoot bien supprimé du serveur");
      });
  };

  useEffect(() => {
    axios
      .get("https://wahoot-api.herokuapp.com/wahoot/all")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setForm(data[0].data);
      });
  }, []);

  return (
    <div className={classes.content}>
      <CreateW />
      {form.length === 0 && (
        <p style={{ textAlign: "center" }}>Aucun Wahoot pour l'instant.</p>
      )}
      {form.length && (
        <div>
          <CardsWahootList form={form} onDeleteWahoot={deleteWahoot} />
        </div>
      )}
    </div>
  );
};

export default ListWahoot;
