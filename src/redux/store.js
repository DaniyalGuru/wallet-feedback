import { createStore, combineReducers } from "redux";
import { reducer1 } from "./reducers";

const rootReducer = combineReducers({reducer1})

export const store = createStore(rootReducer)