import React from "react";
import TodoTemplateMain from "./TodoTemplateMain";
import TodoHead from "../TodoHead";
import TopLine from "./TopLine";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import TodoFootMain from "./TodoFootMain";

const RenderMain = () => {
  return (
    <TodoTemplateMain>
      <TodoHead />
      <TopLine />
      <TodoList />
      <TodoCreate />
      <TodoFootMain />
    </TodoTemplateMain>
  );
};

export default RenderMain;
