import { legacy_createStore as createStore, combineReducers } from "redux";
import { todoReducer } from "../Reducers";

const rootReducers = combineReducers({ todoReducer });
export type RootState = ReturnType<typeof rootReducers>;

const store = createStore(rootReducers);

export default store;
