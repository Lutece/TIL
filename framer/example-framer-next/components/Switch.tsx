import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Background = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  color: #000;
`;

const MyCanvas = styled.div`
  position: relative;

  width: 295px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  border-radius: 50px;
  padding: 11px;
  background-color: rgba(255, 255, 255, 0.4);
  color: #a5a5a5;
`;

export default function Switch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <MyCanvas>
      <span>왼쪽</span>
      <span>오른쪽</span>
      <Background className="switch" data-ison={isOn} onClick={toggleSwitch}>
        <motion.span
          className="handle"
          layout
          transition={spring}
          style={{ textAlign: "center", paddingTop: "5px" }}
        >
          {isOn ? "오른쪽" : "왼쪽"}
        </motion.span>
      </Background>
    </MyCanvas>
  );
}
