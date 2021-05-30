import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers";
import StepImageUpload from "../ImageUpload";
import { setRecipe, setStepImage } from "../../redux/addrecipeReducer";
import CancelButton from "../CancelButton";
const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 2;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageBox = styled.div`
  height: 100px;
  width: 800px;
  display: flex;
  flex-direction: column;
  background: white;
  border: solid 1px black;
`;

const TextLine = styled.div`
  flex: 2 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonLine = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 10%;
  height: 100%;
  min-width: 50px;
  min-height: 25px;
`;

const dummy = () => {};

export default function ({
  cancel = dummy,
  button = dummy,
  message = "",
  buttonMessage = "",
}: {
  cancel?: Function;
  button?: Function;
  message?: string;
  buttonMessage?: string;
}) {
  return (
    <Modal>
      <MessageBox>
        <CancelButton Cancel={cancel}></CancelButton>
        <TextLine>{message}</TextLine>
        <ButtonLine>
          <Button onClick={(e) => button(e)}>{buttonMessage}</Button>
        </ButtonLine>
      </MessageBox>
    </Modal>
  );
}
