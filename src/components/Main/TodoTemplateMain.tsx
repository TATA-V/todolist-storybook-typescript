import React from "react";
import styled from "styled-components";
import pageBg from "../../assets/page-bg.png";
import { ITemplateProps } from "../Notice/TodoTemplateNotice";

const TodoTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const RealTemplateBlock = styled.div`
  width: 380px;
  height: 831px;

  position: relative;
  border-radius: 16px;
  box-shadow: 4px 3px 15px #adacac;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: url("${pageBg}");
  background-size: 380px 831px;
`;

const TodoTemplateMain = ({ children }: ITemplateProps) => {
  return (
    <TodoTemplateBlock>
      <RealTemplateBlock>{children}</RealTemplateBlock>
    </TodoTemplateBlock>
  );
};

export default TodoTemplateMain;
