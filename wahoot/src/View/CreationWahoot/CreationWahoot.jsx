import React, { useState, useEffect } from "react";
import ButtonQuestionCreation from "./Components/ButtonQuestionCreation";
import Calendar from "./Components/Calendar";
import MainTitleCreationWahoot from "./Components/MainTitleCreationWahoot";
import TitleCreationWahoot from "./Components/TitleCreationWahoot";
import ButtonCancel from "./Components/ButtonCancel";
import ButtonSave from "./Components/ButtonSave";
import QuestionsW from "./Components/QuestionsW";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },

  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 15,
  },
}));

const CreationWahoot = ({ match }) => {
  const [wahootId, setWahootId] = useState("");
  const [form, setForm] = React.useState({
    title: "",
    endDate: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleTitleChange = (e) => {
    setForm({ ...form, title: e.target.value });
  };

  const handleDateChange = (e) => {
    setForm({ ...form, endDate: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  useEffect(() => {
    if (match?.params?.id) {
      setWahootId(match.params.id);
      axios
        .get(`https://wahoot-api.herokuapp.com/wahoot/${match.params.id}`)
        .then((response) => {
          console.log(response.data);
          setForm(response.data);
        });
    }
  }, [match?.params?.id]);

  const handleSaveWahoot = () => {
    if (match?.params?.id) {
      axios
        .patch(
          `https://wahoot-api.herokuapp.com/wahoot/${match.params.id}`,
          form
        )
        .then(() => {
          setOpen(true);
        });
    } else {
      axios
        .post("https://wahoot-api.herokuapp.com/wahoot", form)
        .then((response) => {
          setOpen(history.push(`/wahoot-edition/${response.data._id}`));
        });
    }
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.block}>
        <MainTitleCreationWahoot />
      </div>
      <div className={classes.block}>
        <TitleCreationWahoot
          value={form.title}
          handleChange={handleTitleChange}
        />
      </div>
      <div className={classes.block}>
        <Calendar value={form.endDate} handleChange={handleDateChange} />
      </div>
      <div className={classes.block}>
        <Button variant="contained" color="primary" onClick={handleSaveWahoot}>
          {match?.params?.id ? "Créer une question" : "Sauvegarder le Wahoot"}
        </Button>
      </div>
      <div className={classes.block}>
        <QuestionsW open={open} wahootId={match?.params?.id} />
      </div>
      <div className={classes.container}>
        <ButtonCancel />
        <ButtonSave onClick={handleSubmit} />
      </div>
      <ButtonQuestionCreation
        open={open}
        onClose={handleClose}
        titleQuestion={form.title}
        wahootId={wahootId}
      />
      {/*<ModalQuestions/>*/}
    </div>
  );
};

export default CreationWahoot;
