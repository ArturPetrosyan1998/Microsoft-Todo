import { useDispatch } from "react-redux"
import TodoList from "../pages/TodoList/TodoList"
import { addTodo, removeTodo } from "../redux/actions/todo";

const TodoListContainer = () => {
    const dispatch = useDispatch();
    const add = (todo) => {
        dispatch(addTodo(todo))
    }
    const remove = (id) => {
        dispatch(removeTodo(id))
    }
    return <TodoList add={add} remove={remove}/>
}

export default TodoListContainer;