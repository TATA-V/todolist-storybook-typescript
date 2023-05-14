import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";

const TodoHeadBlock = styled.div`
  width: 380px;
  height: 67px;
  background-color: #2a313b;
  border-radius: 15px 15px 0 0;
  border-bottom: solid 1px #242b35;

  .logo {
    width: 179.7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <StyledLink to="/">
        <img className="logo" src={logoImg} alt="logo" />
      </StyledLink>
    </TodoHeadBlock>
  );
};

export default TodoHead;
