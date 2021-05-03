import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function EditIconLink() {
  return (
    <div>
      <Button>
        <Link to="/wahoot-creation">
          <EditIcon />
        </Link>
      </Button>
    </div>
  );
}
