import React from "react";
import styled from "styled-components";
import pageBg from "../../assets/page-bg-2.png";

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
  margin: 80px auto 80px auto;
  overflow: hidden;

  background: url("${pageBg}");
  background-color: #748797;
  background-size: 380px 831px;
`;

export interface ITemplateProps {
  children: React.ReactNode;
}

const TodoTemplateNotice = ({ children }: ITemplateProps) => {
  return (
    <TodoTemplateBlock>
      <RealTemplateBlock>{children}</RealTemplateBlock>
    </TodoTemplateBlock>
  );
};

export default TodoTemplateNotice;
