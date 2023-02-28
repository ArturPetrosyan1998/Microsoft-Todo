import { v4 } from "uuid";
import { ADD_TODO, REMOVE_TODO } from "../reducers/todoReducer";

export const addTodo = (todo) => {
    const id = v4()
    return { type: ADD_TODO, todo, id }
}
export const removeTodo = (id) => {
    return { type: REMOVE_TODO, id }

}
