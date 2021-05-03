import ColorButtonDeepPurple from "./Components/ColorButtonDeepPurple";
import ColorButtonIndigo from "./Components/ColorButtonIndigo";
import ColorButtonPink from "./Components/ColorButtonPink";
import ColorButtonTeal from "./Components/ColorButtonTeal";
import QuestionsPlayer from "./Components/QuestionsPlayer";
import Timer from "./Components/Timer";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const StartGame = (props) => {
  const classes = useStyles();

  const wahootId = props.match.params.wahootId;
  const [question, setQuestion] = useState([]);
  const [positionQuestion, setPositionQuestion] = useState(0);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://wahoot-api.herokuapp.com/questions/${wahootId}`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setQuestion(data);
      });
  }, []);

  const handleClick = (answerId) => {
    console.log(answerId, wahootId, question[positionQuestion]?._id);
    axios
      .post(`https://wahoot-api.herokuapp.com/player-answers`, {
        questionId: question[positionQuestion]?._id,
        answerId: answerId,
        wahootId: wahootId,
        player: {
          name: "toto",
          _id: "123456789",
        },
      })
      .then(() => {
        if (positionQuestion < question.length - 1) {
          setPositionQuestion(positionQuestion + 1);
        } else {
          axios
            .post(`https://wahoot-api.herokuapp.com/ranking/${wahootId}`,
              {
                player: {
                  name: "toto",
                  _id: "123456789",
                }
              })
            .then(() =>
              history.push("/end-game-player/"+ wahootId)
            );
        }
      });
  };

  console.log(wahootId);
  return (
    <div className={classes.block}>
      <div>
        <QuestionsPlayer
          questionText={question[positionQuestion]?.questionText}
        />
        <p>
          <Timer />
        </p>
        <ColorButtonIndigo
          onClick={() =>
            handleClick(question[positionQuestion]?.answerList[0]._id)
          }
        >
          {question[positionQuestion]?.answerList[0].text}
        </ColorButtonIndigo>
        <ColorButtonPink
          onClick={() =>
            handleClick(question[positionQuestion]?.answerList[1]._id)
          }
        >
          {question[positionQuestion]?.answerList[1].text}
        </ColorButtonPink>
        <ColorButtonDeepPurple
          onClick={() =>
            handleClick(question[positionQuestion]?.answerList[2]._id)
          }
        >
          {question[positionQuestion]?.answerList[2].text}
        </ColorButtonDeepPurple>
        <ColorButtonTeal
          onClick={() =>
            handleClick(question[positionQuestion]?.answerList[3]._id)
          }
        >
          {question[positionQuestion]?.answerList[3].text}
        </ColorButtonTeal>
      </div>
    </div>
  );
};

export default StartGame;
