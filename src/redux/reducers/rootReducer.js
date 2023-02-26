import { combineReducers } from "redux";
import toDoReducer from "./todoReducer";


const rootReducer = combineReducers({ toDoReducer: toDoReducer })

export default rootReducer;