import ColorButtonDeepPurple from "./Components/ColorButtonDeepPurple";
import ColorButtonIndigo from "./Components/ColorButtonIndigo";
import ColorButtonPink from "./Components/ColorButtonPink";
import ColorButtonTeal from "./Components/ColorButtonTeal";
import QuestionsPlayer from "./Components/QuestionsPlayer";
import Timer from "./Components/Timer";
import TitlePlayer from "./Components/TitlePlayer";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";

//test

const useStyles = makeStyles((theme) => ({
    block: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
  }));


const questionReps = [{
    id:"123",
    rep1: "CSS",
    rep2: "Français",
    rep3: "Anglais",
    rep4: "Japonais"
}
];

//tant que l'id est le même partour : titre, questions, réponses , peut on reprendre sur diff composants? 
const StartGame = () => {


    const classes = useStyles();
    return (
        <div className={classes.block}>
            <TitlePlayer />
            {questionReps.map((qr) => {
                return (
                    <div >
                        <QuestionsPlayer />
                        <p><Timer /></p>
                        <ColorButtonIndigo >{qr.rep1}</ColorButtonIndigo>
                        <ColorButtonPink >{qr.rep2}</ColorButtonPink>
                        <ColorButtonDeepPurple >{qr.rep3}</ColorButtonDeepPurple>
                        <ColorButtonTeal >{qr.rep4}</ColorButtonTeal>
                    </div>
                )
            })}
        </div>
    )
};
                  

export default StartGame;