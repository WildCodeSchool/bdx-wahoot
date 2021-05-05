import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function EditIconLink({ wahootId }) {
  return (
    <div>
      <Button component={Link} to={`wahoot-edition/${wahootId}`}>
        <EditIcon />
      </Button>
    </div>
  );
}
