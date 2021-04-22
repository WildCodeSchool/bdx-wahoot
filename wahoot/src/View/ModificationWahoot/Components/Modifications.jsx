import { TextField } from "@material-ui/core";
import React from "react";
import TitleCreationWahoot from "../../CreationWahoot/Components/TitleCreationWahoot";

const user = {
  title: "Wahootsuper",
  date: "10/03/2021",
};

const Modifications = () => {
  const [form, setForm] = React.useState(user);

  return (
    <div>
      <div>
        <input TitleCreationWahoot value={form.title} type="text" />
      </div>

      <div>
        <input Calendar value={form.date} type="text" />
      </div>
    </div>
  );
};

export default Modifications;
