import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Addrecipe from "./components/Addrecipe";
import Detailedrecipe from "./components/Recipe/Detailedrecipe";
import Home from "./components/Home";

const Main = styled.div`
  * {
    box-sizing: border-box;
    font-family: Noto;
  }
  dispaly: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Main>
      <Switch>
        <Route path="/recipe/:id" component={Detailedrecipe}></Route>
        <Route path="/Addrecipe" component={Addrecipe}></Route>

        <Route path="/" component={Home}></Route>
      </Switch>
    </Main>
  );
}

export default App;
