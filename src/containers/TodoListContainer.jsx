import { useDispatch, useSelector } from "react-redux"
import TodoList from "../pages/TodoList/TodoList"
import { addComplitedTodo, addImportantTodo, addTodo, removeTodo } from "../redux/actions/todo";

const TodoListContainer = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    const add = (todo) => {
        dispatch(addTodo(todo))
    }
    const remove = (id) => {
        dispatch(removeTodo(id))
    }
    const important = (importantId, checked) => {
        dispatch(addImportantTodo(importantId, checked))
    }
    const complited = (complitedId) => {
        dispatch(addComplitedTodo(complitedId))
    }
    return <TodoList add={add} remove={remove} important={important} complited={complited} />
}

export default TodoListContainer;