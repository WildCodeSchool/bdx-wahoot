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



const AnswerTest = ({ answers, onChange }) => {

    // 4 ANSWERS & HANDLERS
    const [open, setOpen] = React.useState(false);
    const [openone, setOpenone] = React.useState(false);
    const [opentwo, setOpentwo] = React.useState(false);
    const [openthree, setOpenthree] = React.useState(false);

    const handleChangeAnswer = (event) => {
        const newAnswers = [...answers];
        newAnswers[0] = { ...answers[0], text: event.target.value };
        onChange(newAnswers);
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

    const handleChangeCheck = (event) => {
            const newAnswers = [...answers];
            newAnswers[0] = { ...answers[0], isGoodAnswer: event };
            onChange(newAnswers);
        };
    const handleChangeCheckOne = (event) => {
        const newAnswers = [...answers];
        newAnswers[1] = { ...answers[1], isGoodAnswer: event };
        onChange(newAnswers);
    };

    const handleChangeCheckTwo = (event) => {
        const newAnswers = [...answers];
        newAnswers[2] = { ...answers[2], isGoodAnswer: event };
        onChange(newAnswers);
    };

    const handleChangeCheckThree = (event) => {
        const newAnswers = [...answers];
        newAnswers[3] = { ...answers[3], isGoodAnswer: event };
        onChange(newAnswers);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenOne = () => {
        setOpenone(true);
    };

    const handleClickOpenTwo = () => {
        setOpentwo(true);
    };

    const handleClickOpenThree = () => {
        setOpenthree(true);
    };


    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseOne = () => {
        setOpenone(false);
    };

    const handleCloseTwo = () => {
        setOpentwo(false);
    };

    const handleCloseThree = () => {
        setOpenthree(false);
    };


    return (
        <div>
            <ColorButtonIndigo onClick={handleClickOpen} >
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
                    <Checker checked={answers[0]?.isGoodAnswer} onChange={handleChangeCheck}>{answers.isGoodAnswer ? true : false}</Checker>
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

            <ColorButtonTeal onClick={handleClickOpenOne}>
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
                    <Checker checked={answers[1]?.isGoodAnswer} onChange={handleChangeCheckOne}>{answers.isGoodAnswer ? true : false}</Checker>
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
            <ColorButtonDeepPurple onClick={handleClickOpenTwo}>
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
                    <Checker checked={answers[2]?.isGoodAnswer} onChange={handleChangeCheckTwo}>{answers.isGoodAnswer ? true : false}</Checker>
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
            <ColorButtonPink onClick={handleClickOpenThree} >
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
                    <Checker checked={answers[3]?.isGoodAnswer} onChange={handleChangeCheckThree}>{answers.isGoodAnswer ? true : false}</Checker>
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
