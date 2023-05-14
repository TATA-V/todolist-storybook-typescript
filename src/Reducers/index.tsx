import { ITodosArr, initialState } from "./initialState";
import { CREATE, REMOVE, TOGGLE, DOING_FILTER, COMPLE_FILTER, CHANGE_TEXT, ITodos, TTodoAction } from "../Actions/action";

export const todoReducer = (state: ITodosArr = initialState, action: TTodoAction) => {
  switch (action.type) {
    case CREATE:
      const createPayload = action.payload as ITodos;
      return Object.assign({}, state, { todos: [...state.todos, createPayload], doing: [...state.doing, createPayload] });

    case REMOVE:
      const removePayload = action.payload as { id: number };
      const removeTodos = state.todos.filter((el: ITodos) => el.id !== removePayload.id);
      const removeDoing = state.doing.filter((el: ITodos) => el.id !== removePayload.id);
      const removeCompleted = state.completed.filter((el: ITodos) => el.id !== removePayload.id);
      return Object.assign({}, state, { todos: removeTodos, doing: removeDoing, completed: removeCompleted });

    case TOGGLE:
      const togglePayload = action.payload as { id: number };
      const toggleTodos = state.todos.map((el: ITodos) => (el.id === togglePayload.id ? { ...el, done: !el.done } : el));
      const toggleDoing = state.doing.filter((el: ITodos) => el.id !== togglePayload.id);
      const toggleCompleted = state.completed.filter((el: ITodos) => el.id !== togglePayload.id);
      return Object.assign({}, state, { todos: toggleTodos, doing: toggleDoing, completed: toggleCompleted });

    case DOING_FILTER:
      const doingPayload = action.payload as boolean;
      const doingFilter = state.todos.filter((el: ITodos) => el.done === doingPayload);
      return Object.assign({}, state, { doing: doingFilter });

    case COMPLE_FILTER:
      const complePayload = action.payload as boolean;
      const compleFilter = state.todos.filter((el: ITodos) => el.done === complePayload);
      return Object.assign({}, state, { completed: compleFilter });

    case CHANGE_TEXT:
      const changeTextPayload = action.payload as { id: number; text: string };
      const changeTodos = state.todos.map((el: ITodos) => {
        if (el.id === changeTextPayload.id) return { ...el, text: changeTextPayload.text };
        return el;
      });
      const changeDoing = state.doing.map((el: ITodos) => {
        const changeDoingPayload = action.payload as { id: number; text: string };
        if (el.id === changeDoingPayload.id) return { ...el, text: changeDoingPayload.text };
        return el;
      });
      const changeCompleted = state.completed.map((el: ITodos) => {
        const changeComplePyload = action.payload as { id: number; text: string };
        if (el.id === changeComplePyload.id) return { ...el, text: changeComplePyload.text };
        return el;
      });

      return Object.assign({}, state, { todos: changeTodos, doing: changeDoing, completed: changeCompleted });

    default:
      return state;
  }
};
