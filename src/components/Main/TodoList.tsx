import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import AdcButton from "./AdcButton";
import { RootState } from "../../Store";

// 전체 스타일
const TodoListBlock = styled.div`
  width: 326px;
  height: 456px;
  margin: 49px 0 0 54px;

  .Doing-Btn {
    margin: 0 10px 0 10px;
  }
`;

// 리스트 블럭
const ListBlock = styled.div`
  width: 326px;
  height: 228px;
  margin-top: 120px;
  padding-left: 38px;
  position: relative;
  overflow-y: auto;

  .nothing {
    position: absolute;
    margin-top: 13px;
    color: #252e36;
    font-size: 12px;
    font-weight: 700;
    opacity: 60%;
  }
`;

// 리스트 모서리 블러 느낌 배경
const BlurBg = styled.div`
  filter: blur(0.7px);
  position: absolute;
  margin-top: 10px;
  width: 327px;
  height: 382px;
  background-color: #fff;
  border-radius: 45px 0 0 45px;
  opacity: 80%;
  margin-top: 27px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const BigText = styled.span`
  font-size: 32px;
  color: #252e36;
  font-weight: 600;
  position: absolute;
  margin: 98px -213px -50px;
`;

// 리스트들이 안 접혀있을 때
const Fold = styled.div`
  height: 56px;
  width: 313px;
  margin-left: 9px;
  position: absolute;
  cursor: pointer;

  .line {
    width: 318.5px;
    height: 1px;
    background-color: #748797;
    margin-bottom: 13px;
    opacity: 50%;
    filter: blur(0.5px);
  }

  .fold-txt {
    font-size: 25px;
    font-weight: 600;
    margin-left: 29px;
    color: #748797;
    opacity: 50%;
  }
`;

// 리스트들이 접혀있을 때
const UnFoldBg = styled.div`
  position: relative;
  width: 350px;
  height: 60px;
  margin-left: 10px;
  margin-top: 347px;
  background-color: #fff;
  opacity: 80%;
  border: 1.5px solid #ececec;
  border-radius: 90px 0 0 90px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  filter: blur(0.7px);
`;

const UnFold = styled.div`
  color: #748797;
  opacity: 50%;
  font-size: 25px;
  position: relative;
  font-weight: 600;
  margin: -47px 0 0 38px;
  cursor: pointer;
`;

const TodoList = () => {
  const [open, setOpen] = useState(true);
  // !!!이제 여기서 Redux로 상태를 가져와서 사용!!!
  const state = useSelector((state: RootState) => state.todoReducer);
  const [btnTxt, setBtnTxt] = useState(`${state.todos.length} tasks`);
  const [all, setAll] = useState(true);
  const [filterTxt, setFilterTxt] = useState("all");

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <TodoListBlock>
      {/* 버튼 구역임 */}
      <AdcButton setBtnTxt={setBtnTxt} setAll={setAll} setFilterTxt={setFilterTxt} />

      {open ? (
        <>
          {/* 리스트 배경. 블러 처리. */}
          <BlurBg className="blur-bg"></BlurBg>
          {/* 숫자는 Redux 상태에서 가져와서 사용하는거로 수정해야 함 */}
          <BigText>{all ? `${state.todos.length} tasks` : `${btnTxt}`}</BigText>
          {/* 찐 리스트들 */}
          <ListBlock>
            {state.todos.length === 0 && filterTxt === "all" ? <span className="nothing">오늘의 할 일을 적어주세요!</span> : null}
            {state.doing.length === 0 && filterTxt === "doing" ? <span className="nothing">할 일을 모두 완료했습니다!</span> : null}
            {state.completed.length === 0 && filterTxt === "completed" ? <span className="nothing">아직 완료한 일이 없습니다!</span> : null}
            {all
              ? state.todos.map((todo) => <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />)
              : filterTxt === "doing"
              ? state.doing.map((todo) => <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />)
              : state.completed.map((todo) => <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />)}
          </ListBlock>
          <Fold onClick={onToggle}>
            <div className="line"></div>
            <span className="fold-txt">Fold</span>
          </Fold>
        </>
      ) : (
        <>
          <UnFoldBg></UnFoldBg>
          <UnFold onClick={onToggle}>
            <span className="unFold-txt">Unfold</span>
          </UnFold>
        </>
      )}
    </TodoListBlock>
  );
};

export default TodoList;
