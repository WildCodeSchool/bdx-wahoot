import './App.css';
import Main from "./Layout/Main/Main";
import CreationWahoot from "./View/CreationWahoot/Components/CreationWahoot";
import Main from './Layout/Main/Main.jsx';
import Home from './View/Home/Home.jsx';

function App() {
  return (
  <Main>
     <Home />
    <CreationWahoot />
    {/*loging*/}
  </Main>
 
  );
}

export default App;
