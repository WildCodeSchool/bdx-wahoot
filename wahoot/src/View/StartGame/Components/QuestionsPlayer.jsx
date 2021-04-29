import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const questionReps = [
  {
    id: "123",
    question: "Quel est le langage web ? ",
  },
];

const QuestionsPlayer = () => {
  return (
    <div>
      {questionReps.map((qr) => {
        return (
          <div>
            <Card>
              <CardContent>
                <Typography variant="h6">{qr.question}</Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsPlayer;
