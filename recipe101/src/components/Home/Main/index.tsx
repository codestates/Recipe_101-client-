import styled from "styled-components";
import Mainslide from "./Mainslide";
import Maingrid from "./Maingrid";
import Mainintro from "./Mainintro";
import BottomSide from "./BottomSide";
//import Maindesc from "./Maindesc";
const Frame = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  // display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;
const InnerFrame = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  // flex: 1 0 0;
  margin: 0 auto;
`;

export default function Main() {
  return (
    <Frame>
      <Mainslide></Mainslide>
      <Maingrid></Maingrid>
      <Mainintro></Mainintro>
      <BottomSide></BottomSide>
      {/* <InnerFrame>
        <Mainslide></Mainslide>
        <Maingrid></Maingrid>
        <Mainintro></Mainintro>
        <BottomSide></BottomSide>
      </InnerFrame> */}
    </Frame>
  );
}
