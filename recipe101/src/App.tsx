import React, { useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Link,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Addrecipe from "./components/addrecipe";
import Resister from "./components/Resister";
import Searchbar from "./components/Searchbar";
import Landingpage from "./components/Landingpage";
import Mypage from "./components/Mypage";
import Modal from "./components/Modal";
import Login from "./components/Login";

import Searchresult from "./components/Searchresult";

const Main = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 0;
  }
  dispaly: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  let location = useLocation();
  let history = useHistory();
  let [active, activef] = useState(false);
  let [search, searchf] = useState(false);
  let [isSearch, isSearchf] = useState(false);
  return (
    <>
      <Main>
        <Searchbar isSearch={isSearch} isSearchf={isSearchf}></Searchbar>
        <Switch>
          <Route exact path="/">
            {isSearch ? (
              <Searchresult></Searchresult>
            ) : (
              <Landingpage></Landingpage>
            )}
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/Resister">
              <Resister></Resister>
            </Route>
          </Route>
          <Route exact path="/addrecipe">
            <Addrecipe></Addrecipe>
          </Route>
          <Route exact path="/mypage">
            <Mypage></Mypage>
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;