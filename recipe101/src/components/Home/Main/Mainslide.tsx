import axios from "axios";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Recipeslide from "./Recipeslide";
import img from "../../../Assets/Images/food-2068217_1920-turned.jpg";

const slide = keyframes`
0% {
  margin-left:100%;
  width:100%
}
20% {
  margin-left:0%;
  width:100%
}
80% {
  margin-left:0;
  width:100%
}
100% {
  margin-left:-100%;
  width:100%
} 

`;

const Frame = styled.div`
  height: 816px;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url(${img});
`;

const Innerframe = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // border: solid 1px red;
`;

const DataArea = styled.div`
  flex: 16 0 0;
  overflow: hidden;
  animation: ${slide} 4s infinite linear normal;
  background-image: url(${img});
  // border: solid 1px red;
`;
const SelectArea = styled.div`
  flex: 2 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // border: solid 1px red;
`;

const SelectBox = styled.button<{ isOn: boolean }>`
  height: 10%;
  width: 1%;
  margin: 10px;
  // border-radius: 50%;
  // border: solid 1px red;
  ${(props) => props.isOn && `width: 2%; `}

  &:hover {
    height: 20%;
  }
`;
interface recipe {
  food_id?: number;
  food_name?: string;
  food_img?: string;
  level?: string;
  cooking_time?: string;
  summary?: string;
  count?: number | null;
}

function Mainslide() {
  let [Recipes, setRecipes] = useState<recipe[]>([]);
  let [next, setnext] = useState(1);
  let [data, setdata] = useState<recipe>();
  let url = `${process.env.REACT_APP_SERVER_URL}/recommend/10`;
  if (!Recipes.length) {
    axios.get(url).then((rst) => {
      console.log(rst);
      setRecipes(rst.data.data.recipe);
      setdata(rst.data.data.recipe[0]);
      setnext(1);
    });
  }

  return (
    <Frame>
      <Innerframe>
        <DataArea
          onClick={() => {}}
          onAnimationIteration={(e) => {
            let n = next + 1 < Recipes.length ? next + 1 : 0;
            setdata(Recipes[next]);
            setnext(n);
          }}
        >
          <Recipeslide data={data || {}}></Recipeslide>
        </DataArea>
        <SelectArea>
          {Recipes.map((x, i) => {
            return (
              <SelectBox
                key={i}
                isOn={i === (next > 0 ? next - 1 : Recipes.length - 1)}
                onClick={() => {
                  setdata(x);
                  setnext(i + 1 < Recipes.length ? i + 1 : 0);
                }}
              ></SelectBox>
            );
          })}
        </SelectArea>
      </Innerframe>
    </Frame>
  );
}

export default Mainslide;
