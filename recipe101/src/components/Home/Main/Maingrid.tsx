import React from "react";
import axios from "axios";
import styled from "styled-components";
import Recipegrid from "./Recipegrid";

const Frame = styled.div`
  // height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 150px auto 200px auto;
  max-width: 1500px;
  // border: 1px solid white;
`;

const Body = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function Maingrid() {
  let [recipes, setRecipes] = React.useState([]);
  let [loaded, setLoaded] = React.useState(false);

  let url = `${process.env.REACT_APP_SERVER_URL}/recent/12`;

  if (!loaded) {
    axios.get(url).then((rst) => {
      setRecipes(rst.data.data.recipe);
      setLoaded(true);
    });
  }

  return (
    <Frame>
      <Body>
        {recipes.map((x, i) => {
          return <Recipegrid key={i} data={x}></Recipegrid>;
        })}
      </Body>
    </Frame>
  );
}

export default Maingrid;
