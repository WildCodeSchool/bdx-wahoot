import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checker from "./Checker";
import ColorButtonIndigo from "../../StartGame/Components/ColorButtonIndigo";
import ColorButtonTeal from "../../StartGame/Components/ColorButtonTeal";
import ColorButtonDeepPurple from "../../StartGame/Components/ColorButtonDeepPurple";
import ColorButtonPink from "../../StartGame/Components/ColorButtonPink";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";



const AnswerTest = ({ answers, onChange }) => {

    // 4 ANSWERS HANDLERS
    const [open, setOpen] = React.useState(false);
    const [openone, setOpenone] = React.useState(false);
    const [opentwo, setOpentwo] = React.useState(false);
    const [openthree, setOpenthree] = React.useState(false);

    const handleChangeAnswer = (event) => {
        const newAnswers = [...answers];
        newAnswers[0] = { ...answers[0], text: event.target.value };
        onChange(newAnswers);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenOne = () => {
        setOpenone(true);
    };

    const handleChangeAnswerOne = (event) => {
        const newAnswers = [...answers];
        newAnswers[1] = { ...answers[1], text: event.target.value };
        onChange(newAnswers);
    };
    const handleChangeAnswerTwo = (event) => {
        const newAnswers = [...answers];
        newAnswers[2] = { ...answers[2], text: event.target.value };
        onChange(newAnswers);
    };
    const handleChangeAnswerThree = (event) => {
        const newAnswers = [...answers];
        newAnswers[3] = { ...answers[3], text: event.target.value };
        onChange(newAnswers);
    };

    const handleCloseOne = () => {
        setOpenone(false);
    };

    const handleClickOpenTwo = () => {
        setOpentwo(true);
    };

    const handleCloseTwo = () => {
        setOpentwo(false);
    };

    const handleClickOpenThree = () => {
        setOpenthree(true);
    };

    const handleCloseThree = () => {
        setOpenthree(false);
    };

    //4 CHECKERS


    let [checked, setChecked] = React.useState(false);
    let [checked1, setChecked1] = React.useState(false);
    let [checked2, setChecked2] = React.useState(false);
    let [checked3, setChecked3] = React.useState(false);



    return (
        <div>
            <ColorButtonIndigo
                onClick={handleClickOpen}
            >
                {answers[0]?.text ? answers[0].text : "Ajouter une réponse"}

            </ColorButtonIndigo>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Réponse"
                        type="text"
                        fullWidth
                        value={answers[0]?.text}
                        onChange={handleChangeAnswer}
                    />
                    <Checker checked={checked} onChange={setChecked} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Valider
                    </Button>
                </DialogActions>
            </Dialog>

            <ColorButtonTeal
                onClick={handleClickOpenOne}
            >
                {answers[1]?.text ? answers[1].text : "Ajouter une réponse"}
            </ColorButtonTeal>
            <Dialog
                open={openone}
                onClose={handleCloseOne}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Réponse"
                        type="text"
                        fullWidth
                        value={answers[1]?.text}
                        onChange={handleChangeAnswerOne}
                    />
                    <Checker checked={checked1} onChange={setChecked1} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseOne} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleCloseOne} color="primary">
                        Valider
                    </Button>
                </DialogActions>
            </Dialog>
            <ColorButtonDeepPurple
                onClick={handleClickOpenTwo}
            >
                {answers[2]?.text ? answers[2].text : "Ajouter une réponse"}
            </ColorButtonDeepPurple>
            <Dialog
                open={opentwo}
                onClose={handleCloseTwo}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Réponse"
                        type="text"
                        fullWidth
                        value={answers[2]?.text}
                        onChange={handleChangeAnswerTwo}
                    />
                    <Checker checked={checked2} onChange={setChecked2} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTwo} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleCloseTwo} color="primary">
                        Valider
                    </Button>
                </DialogActions>
            </Dialog>
            <ColorButtonPink
                onClick={handleClickOpenThree}
            >
                {answers[3]?.text ? answers[3].text : "Ajouter une réponse"}
            </ColorButtonPink>
            <Dialog
                open={openthree}
                onClose={handleCloseThree}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Saisir la réponse</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Réponse"
                        type="text"
                        fullWidth
                        value={answers[3]?.text}
                        onChange={handleChangeAnswerThree}
                    />
                    <Checker checked={checked3} onChange={setChecked3} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseThree} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleCloseThree} color="primary">
                        Valider
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AnswerTest;
