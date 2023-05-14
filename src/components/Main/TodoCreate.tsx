import React, { useState } from "react";
import styled from "styled-components";
import PlusMiusShadow from "../../assets/plus-icon-shadow.svg";
import { useSelector, useDispatch } from "react-redux";
import { create } from "../../Actions/action";
import { RootState } from "../../Store";

const TodoCreateBlock = styled.div<IOpenProps>`
  position: relative;
  z-index: 5;

  .plus-mius-icon {
    position: absolute;
    margin: ${(props) => (props.open ? "-27px 309.5px" : "-28px 310.5px")};
    transform: ${(props) => (props.open ? "rotate(44deg)" : null)};
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const PlusMinusBtn = styled.button<IOpenProps>`
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

const InsertForm = styled.form`
  @keyframes fadeIn {
    from {
      opacity: 1;
      transform: translateY(60px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }

  width: 380px;
  height: 274px;
  background-color: #2a313b;
  position: absolute;
  border-radius: 14px 14px 0 0;
  margin-top: 557px;
  box-shadow: 0px 0px 150px rgba(255, 255, 255, 0.4);
  animation: fadeIn 0.35s ease-out;

  .mini-square {
    width: 42px;
    height: 4.5px;
    background-color: #748797;
    border-radius: 15px;
    margin: 10px 169px;
    opacity: 30%;
  }

  input {
    width: 296px;
    height: 39px;
    border: none;
    background-color: #2f404d;
    border-radius: 5px;
    margin: 18px 0 0 28px;
    outline: none;
    padding: 1px 15px 0 15px;

    color: #91999f;
    font-weight: 600;
    font-size: 15px;
  }
  input::placeholder {
    color: #91999f;
    font-weight: 600;
    font-size: 15px;
  }
`;

const ModalBg = styled.div`
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  position: absolute;
  width: 380px;
  height: 831px;
  background-color: rgba(0, 0, 0, 0.65);
  animation: opacity 0.125s linear;
`;

interface IOpenProps {
  open: boolean;
}

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // !!!리덕스에서 상태 값 가져와서 활용해야 함!!!
  const state = useSelector((state: RootState) => state.todoReducer);
  const dispath = useDispatch();

  const onToggle = () => {
    setOpen(!open);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 리덕스에서 가져온 상태 써주어야 함
    dispath(
      create({
        id: state.todos.length + 1,
        text: value,
        done: false,
      })
    );
    setOpen(false);
    setValue("");
  };

  return (
    <>
      {open ? (
        <>
          <ModalBg onClick={onToggle}></ModalBg>
          <InsertForm onSubmit={onSubmit}>
            <div className="mini-square"></div>
            <input onChange={onChange} type="text" placeholder="할 일 입력 후, Enter를 누르세요" autoFocus></input>
          </InsertForm>
        </>
      ) : null}
      <TodoCreateBlock onClick={onToggle} open={open}>
        <PlusMinusBtn onClick={onToggle} open={open}></PlusMinusBtn>
        <img className="plus-mius-icon" src={PlusMiusShadow} alt="plus-mius-icon-btn" />
      </TodoCreateBlock>
    </>
  );
};

export default TodoCreate;
