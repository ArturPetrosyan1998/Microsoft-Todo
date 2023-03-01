import { useDispatch } from "react-redux"
import { removeTodo } from "../../redux/actions/todo"

const TodoImportant = () => {
    const todos = JSON.parse(localStorage.getItem('all'))
    const dispatch = useDispatch()
    const importantTodos = todos.filter((item) => item.isImportant === true)
    const onRemove = (id) => {

        dispatch(removeTodo(id))
    }
    return (
        <div>
            {importantTodos.map((item) => {
                return (
                    <div key={item.id}>
                        <h2 >{item.todo}</h2>
                        <input type="checkbox" />
                        <p onClick={() => {
                            onRemove(item.id)
                        }}>X</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoImportant;