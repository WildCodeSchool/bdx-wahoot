import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const WatchRightResButton = ({ wahootId }) => {
  return (
    <div>
      <Link to={`/answers/${wahootId}`}>
        <Button variant="contained" color="primary">
          Voir les bonnes réponses
        </Button>
      </Link>
    </div>
  );
};
export default WatchRightResButton;
