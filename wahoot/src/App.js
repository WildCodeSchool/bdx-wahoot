import './App.css';
import Main from './Layout/Main/Main.jsx';
import Home from './View/Home/Home.jsx';
import ListWahoot from './View/ListWahoot/ListWahoot';
import CreationWahoot from "./View/CreationWahoot/CreationWahoot";


function App() {
  return (

      <Main>
        <Home />
        <ListWahoot />
        <CreationWahoot />
        {/* <Login /> */}
      </Main>
  );
}

export default App;
