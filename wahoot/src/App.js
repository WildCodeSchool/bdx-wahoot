import logo from "./logo.svg";
import "./App.css";
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";
import Main from "./Layout/Main/Main.jsx";
import Home from "./View/Home/Home.jsx";

function App() {
  return (
    <Main>
      <Home />
      <CreationWahoot />
      {/* <Login /> */}
    </Main>
  );
}

export default App;
