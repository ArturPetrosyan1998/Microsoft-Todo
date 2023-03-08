import { v4 } from "uuid";

import { ADD_COMPLITED, ADD_IMPORTANT, ADD_TODO, REMOVE_TODO } from "../reducers/todoReducer";

export const addTodo = (todo) => {
    const id = v4()
    return { type: ADD_TODO, todo, id }
}
export const removeTodo = (id) => {
    return { type: REMOVE_TODO, id }
}

export const addImportantTodo = (id, checked) => {
    return { type: ADD_IMPORTANT, id, checked }
}

export const addComplitedTodo = (id) => {
    return { type: ADD_COMPLITED, id }
}
