import React, { useEffect, useState } from "react";
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

const CreationWahoot = (match) => {
  const [wahoots, setWahoots] = useState({
    _id: "",
    title: "",
    status: "",
    endDate: "",
  });
  const [form, setForm] = useState(wahoots);

  const [open, setOpen] = useState(false);

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

  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    if (match?.params?.id) {
      axios
        .get(`https://wahoot-api.herokuapp.com/wahoot/${match.params.id}`)
        .then((response) => setWahoots(response.data));
    }
  }, []);

  const handleSubmit = () => {
    if (match?.params?.id) {
      axios
        .patch(
          `https://wahoot-api.herokuapp.com/wahoot/${match.params.id}`,
          form
        )
        .then(() => {
          history.push("/");
        });
    } else {
      axios
        .post("https://wahoot-api.herokuapp.com/wahoot", wahoots)
        .then(() => {
          history.push("/");
        });
    }
  };

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
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Créer une question
        </Button>
      </div>
      <div className={classes.block}>
        <QuestionsW />
      </div>
      <div className={classes.container}>
        <ButtonCancel />
        <ButtonSave onClick={handleSubmit} />
      </div>
      <ButtonQuestionCreation
        open={open}
        onClose={handleClose}
        titleQuestion={form.title}
      />
      {/*<ModalQuestions/>*/}
    </div>
  );
};

export default CreationWahoot;
