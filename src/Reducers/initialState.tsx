import { ITodos } from "../Actions/action";

export interface ITodosArr {
  todos: ITodos[];
  doing: ITodos[];
  completed: ITodos[];
}

export const initialState: ITodosArr = {
  todos: [
    {
      id: 1,
      text: "간지나게 숨쉬기",
      done: true,
    },
    {
      id: 2,
      text: "서진이네 본방사수☆☆☆︎",
      done: false,
    },
    {
      id: 3,
      text: "강아지 30분 산책 시키기",
      done: false,
    },
  ],
  doing: [],
  completed: [],
};
