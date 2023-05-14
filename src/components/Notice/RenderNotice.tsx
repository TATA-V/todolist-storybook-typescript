import React from "react";
import styled from "styled-components";
import TodoTemplateNotice from "./TodoTemplateNotice";
import TodoHead from "../TodoHead";
import TodoFootNotice from "./TodoFootNotice";

const NoNotice = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 340px;
`;

const RenderNotice = () => {
  return (
    <TodoTemplateNotice>
      <TodoHead />
      <NoNotice>최근 30일 이내 알림이 없습니다.</NoNotice>
      <TodoFootNotice />
    </TodoTemplateNotice>
  );
};

export default RenderNotice;
