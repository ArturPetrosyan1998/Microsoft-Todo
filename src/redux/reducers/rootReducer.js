import { combineReducers } from "redux";
import toDoReducer from "./todoReducer";


const rootReducer = combineReducers({ todos: toDoReducer })

export default rootReducer;