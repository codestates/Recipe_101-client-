import styled from "styled-components";
import { useState } from "react";
import star from "../../icon/star4.png";
const OuterFrame = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Frame = styled.div`
  flex: 1 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NumberFrame = styled.div`
  flex: 4 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NumberBox = styled.div`
  font-size: 100px;
  font-weight: 700;
`;

const InnerFrame = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: row;
`;

const Box = styled.div<{ k: number; y: number }>`
  display: flex;
  flex: 1 0 0;
  padding: 2px;
  background-image: url("${star}");
  background-size: cover;
  ${({ k, y }) => (k < y ? "background-color: Gold;" : null)};
`;

export default function ({ v, f }: { v: number; f: Function }) {
  let [t, sett] = useState(false);
  let x = Array(5).fill(0);
  return (
    <OuterFrame>
      <Frame>
        <InnerFrame
          onMouseLeave={() => {
            if (!t) {
              f(0);
            }
          }}
        >
          {x.map((x, i) => {
            return (
              <Box
                k={i}
                y={v}
                key={i}
                onClick={() => {
                  sett(!t);
                }}
                onMouseOver={() => {
                  f(i + 1);
                }}
              ></Box>
            );
          })}
        </InnerFrame>
      </Frame>
      <NumberFrame>
        <NumberBox>{v}</NumberBox>
      </NumberFrame>
    </OuterFrame>
  );
}
