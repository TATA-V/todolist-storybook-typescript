import React from "react";
import styled from "styled-components";
import TodoTemplateNotice from "../Notice/TodoTemplateNotice";
import TodoHead from "../TodoHead";
import Profile from "./Profile";
import TodoFootSetting from "./TodoFootSetting";

const TataTxt = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.07);
`;

const RenderSetting = () => {
  return (
    <TodoTemplateNotice>
      <TodoHead />
      <TataTxt>TATA</TataTxt>
      <Profile />
      <TodoFootSetting />
    </TodoTemplateNotice>
  );
};

export default RenderSetting;
