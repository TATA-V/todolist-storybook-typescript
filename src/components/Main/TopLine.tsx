import React from "react";
import styled from "styled-components";

const TopLineBolck = styled.div`
  width: 186px;
  height: 94px;
  margin: 40px 0 0 55px;
  color: #fff;

  h2 {
    font-weight: 600;
    font-size: 32px;
  }

  .toodayTxt {
    font-weight: 600;
    font-size: 18px;
  }
`;
const TopLine = () => {
  return (
    <TopLineBolck>
      <h2>Hello, TATA!</h2>
      <span className="toodayTxt">Today's tasks</span>
    </TopLineBolck>
  );
};

export default TopLine;
