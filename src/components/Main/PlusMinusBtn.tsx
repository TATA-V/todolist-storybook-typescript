import React from "react";
import PlusMiusShadow from "../../assets/plus-icon-shadow.svg";
import styled from "styled-components";

const PlusMinusBtnBg = styled.div<IOpenProps>`
  .plus-mius-icon {
    position: absolute;
    margin: ${(props) => (props.open ? "-27px 309.5px" : "-28px 310.5px")};
    transform: ${(props) => (props.open ? "rotate(44deg)" : null)};
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const PlusMinusBg = styled.button<IOpenProps>`
  width: 70px;
  height: 70px;
  border: ${(props) => (props.open ? "1.5px solid #883939" : "1.5px solid #0c5a9e")};
  border-radius: 25px;
  background-color: ${(props) => (props.open ? "#CD5C5B" : "#2c74b3")};
  margin: -47px 290px 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 1px 2px;
  position: absolute;
  filter: blur(0.5px);
  transition: 0.2s ease-in-out;
  cursor: pointer;
`;

interface IPlusMinusProps {
  onToggle: () => void;
  open: boolean;
}

interface IOpenProps {
  open: boolean;
}

const PlusMinusBtn = ({ onToggle, open }: IPlusMinusProps) => {
  return (
    <PlusMinusBtnBg open={open}>
      <PlusMinusBg onClick={onToggle} open={open}></PlusMinusBg>
      <img className="plus-mius-icon" src={PlusMiusShadow} alt="plus-mius-icon-btn" />
    </PlusMinusBtnBg>
  );
};

export default PlusMinusBtn;
