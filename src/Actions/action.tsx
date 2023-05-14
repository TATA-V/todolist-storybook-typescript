export const CREATE: string = "create" as const;
export const REMOVE: string = "remove" as const;
export const TOGGLE: string = "toggle" as const;
export const DOING_FILTER: string = "doingFilter" as const;
export const COMPLE_FILTER: string = "compleFilter" as const;
export const CHANGE_TEXT: string = "changeText" as const;

export enum ActionTypes {
  CREATE = "create",
  REMOVE = "remove",
  TOGGLE = "toggle",
  DOING_FILTER = "doingFilter",
  COMPLE_FILTER = "compleFilter",
  CHANGE_TEXT = "changeText",
}

// 인터페이스
export interface ITodos {
  id: number;
  text: string;
  done: boolean;
}

interface ICreateAction {
  type: ActionTypes.CREATE;
  payload: ITodos;
}
interface IRemoveAction {
  type: ActionTypes.REMOVE;
  payload: {
    id: number;
  };
}
interface IToggleAction {
  type: ActionTypes.TOGGLE;
  payload: {
    id: number;
  };
}
interface IDoingFilterAction {
  type: ActionTypes.DOING_FILTER;
  payload: boolean;
}
interface ICompleFilterAction {
  type: ActionTypes.COMPLE_FILTER;
  payload: boolean;
}
interface IChangeTextAction {
  type: ActionTypes.CHANGE_TEXT;
  payload: {
    id: number;
    text: string;
  };
}

export type TTodoAction = ICreateAction | IRemoveAction | IToggleAction | IDoingFilterAction | ICompleFilterAction | IChangeTextAction;

// 액션 함수들
export const create = (todo: ITodos): ICreateAction => {
  return {
    type: ActionTypes.CREATE,
    payload: todo, // 추가 리스트는 객체로 받아야 함
  };
};

export const remove = (id: number): IRemoveAction => {
  return {
    type: ActionTypes.REMOVE,
    payload: {
      id,
    },
  };
};

export const toggle = (id: number): IToggleAction => {
  return {
    type: ActionTypes.TOGGLE,
    payload: {
      id,
    },
  };
};

export const doingFilter = (done: boolean): IDoingFilterAction => {
  return {
    type: ActionTypes.DOING_FILTER,
    payload: done,
  };
};

export const compleFilter = (done: boolean): ICompleFilterAction => {
  return {
    type: ActionTypes.COMPLE_FILTER,
    payload: done,
  };
};

export const changeText = (id: number, text: string): IChangeTextAction => {
  return {
    type: ActionTypes.CHANGE_TEXT,
    payload: {
      id,
      text,
    },
  };
};
