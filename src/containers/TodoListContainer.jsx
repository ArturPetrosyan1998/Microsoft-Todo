import { useDispatch } from "react-redux"
import TodoList from "../pages/TodoList/TodoList"
import { addImportantTodo, addTodo, removeTodo } from "../redux/actions/todo";

const TodoListContainer = () => {
    const dispatch = useDispatch();
    const add = (todo) => {
        dispatch(addTodo(todo))
    }
    const remove = (id) => {
        dispatch(removeTodo(id))
    }
    const important = (importantId,checked) => {
        dispatch(addImportantTodo(importantId,checked))
    }
    return <TodoList add={add} remove={remove} important={important}/>
}

export default TodoListContainer;