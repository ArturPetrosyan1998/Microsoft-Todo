import { useDispatch } from "react-redux"
import TodoList from "../pages/TodoList/TodoList"
import { addTodo } from "../redux/actions/todo";

const TodoListContainer = () => {
    const dispatch = useDispatch();
    const onAdd = () => {
        dispatch(addTodo)
    }
    return <TodoList add={onAdd} />
}

export default TodoListContainer;