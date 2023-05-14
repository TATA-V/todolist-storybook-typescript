import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { doingFilter, compleFilter } from "../../Actions/action";
import { RootState } from "../../Store";

// 버튼 스타일
const AdcBtn = styled.button`
  border: 0;
  background-color: #2c74b3;
  height: 37px;
  color: #fff;
  font-size: 15px;
  text-shadow: 0 0 0 #fff;
  border: solid 1px #0c5a9e;
  border-radius: 4px;
  filter: drop-shadow(0 0 2px #0c5a9e);
  box-shadow: 2px 2.5px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  span {
    padding: 9px 10px;
  }
`;

interface IAdcButtonProps {
  setBtnTxt: React.Dispatch<React.SetStateAction<string>>;
  setAll: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterTxt: React.Dispatch<React.SetStateAction<string>>;
}

const AdcButton = ({ setBtnTxt, setAll, setFilterTxt }: IAdcButtonProps) => {
  const state = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();

  const onAll = () => {
    setBtnTxt(`${state.todos.length} tasks`);
    setAll(true);
    setFilterTxt("all");
  };

  const onDoing = () => {
    setBtnTxt("|lI Ꙭゞ");
    setAll(false);
    setFilterTxt("doing");
    dispatch(doingFilter(false));
  };

  const onComple = () => {
    setBtnTxt("ദ്ദി Ꙭ̮)");
    setAll(false);
    setFilterTxt("completed");
    dispatch(compleFilter(true));
  };

  return (
    <>
      <AdcBtn onClick={onAll} className="All-Btn">
        <span>All</span>
      </AdcBtn>
      <AdcBtn onClick={onDoing} className="Doing-Btn">
        <span>Doing</span>
      </AdcBtn>
      <AdcBtn onClick={onComple} className="Completed-Btn">
        <span>Completed</span>
      </AdcBtn>
    </>
  );
};

export default AdcButton;
