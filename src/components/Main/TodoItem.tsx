import React from "react";
import styled from "styled-components";
import trashIcon from "../../assets/trash-icon.svg";
import { remove, toggle, changeText } from "../../Actions/action";
import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";

const TodoItemBlock = styled.div`
  display: flex;
  padding-bottom: 26px;
  align-items: center;
  overflow-y: auto;

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 13px;
  }
`;

const Text = styled.div<ITextProps>`
  width: 169px;
  color: #252e36;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  margin-left: 30px;
  margin-top: 20px;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  line-height: 1.2rem;
  height: 2.5rem;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;

  text-decoration: ${(props) => (props.done ? "1.4px #0C5A9E line-through;" : null)};
`;

const CheckCircle = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;

  .i-check-fill-icon {
    position: absolute;
  }

  .i-check-icon {
    position: absolute;
  }
`;

const DoneText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #2c74b3;
  align-items: center;
  margin-left: 196px;
`;

const Trash = styled.div`
  align-items: center;
  cursor: pointer;
  position: absolute;
  margin-left: 259px;

  .i-trash-icon {
    margin: 0 0 0 -2px;
    font-size: 12.7px;
  }
`;

const ChangeForm = styled.form`
  position: absolute;
  margin: 0 0 1px 27px;

  input {
    box-sizing: border-box;
    width: 164px;
    height: 22px;
    outline: none;
    padding: 1px 0 0 6px;
    border: none;
    border-radius: 4px;
    background-color: #b1bcc1;

    color: #252e36;
    caret-color: #252e36;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0px 0px 6px #7fa2c1;
  }

  input::placeholder {
    position: absolute;
    color: #687178;
    font-size: 12px;
    font-weight: 700;
    opacity: 80%;
    padding: 4px 0 0 1px;
  }
`;

interface ITodoItemProps {
  id: number;
  text: string;
  done: boolean;
}

interface ITextProps {
  done: boolean;
}

const TodoItem = ({ id, text, done }: ITodoItemProps) => {
  const [txt, setTxt] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dispath = useDispatch();

  useEffect(() => {
    const outInput = (e: MouseEvent) => {
      const node = e.target as Node;
      if (isEditable && inputRef.current && !inputRef.current.contains(node) && inputRef.current.value.trim() !== "") {
        dispath(changeText(id, inputRef.current.value.trim()));
        setIsEditable(false);
      } else {
        setIsEditable(false);
      }
    };
    document.addEventListener("mousedown", outInput);

    return () => {
      document.removeEventListener("mousedown", outInput);
    };
  }, [dispath, id, isEditable]);

  const onToggle = () => {
    dispath(toggle(id));
  };

  const onRemove = () => {
    dispath(remove(id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  const hanbleClick = () => {
    setIsEditable(true);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current?.value.trim() === "") {
      setIsEditable(false);
      return;
    }
    setIsEditable(false);
    dispath(changeText(id, txt));
  };

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle}>{done ? <i className="i-check-fill-icon" /> : <i className="i-check-icon" />}</CheckCircle>
      {isEditable ? (
        <ChangeForm onSubmit={onSubmit}>
          <input ref={inputRef} type="text" placeholder={text} onChange={handleChange} autoFocus></input>
        </ChangeForm>
      ) : (
        <Text onClick={hanbleClick} done={done}>
          {text}
        </Text>
      )}
      <DoneText>{done ? <span>Done</span> : ""}</DoneText>
      <Trash onClick={onRemove}>
        <img src={trashIcon} alt="trash-icon" />
      </Trash>
    </TodoItemBlock>
  );
};

export default TodoItem;
