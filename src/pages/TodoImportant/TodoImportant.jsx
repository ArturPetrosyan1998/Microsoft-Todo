import { useDispatch, useSelector } from "react-redux"
import { addImportantTodo, removeTodo } from "../../redux/actions/todo"
import styles from "./TodoImportant.module.scss"
import imgRemove from '../TodoList/assets/Icons/remove.svg'
import { getImportant } from "../../redux/selectors/getImportant"

const TodoImportant = () => {
    const todos = useSelector((state) => getImportant(state))
    const dispatch = useDispatch()
    const onRemove = (id) => {
        dispatch(removeTodo(id))
    }
    const onImportant = (importantId,checked) => {
        dispatch(addImportantTodo(importantId,checked))
    }
    return (
        <div className={styles.container}>
            {todos.map((item) => {
                return (
                    <div key={item.id} className={styles.content}>
                        <h2 >{item.todo}</h2>
                        <div className={styles.icons}>
                            <img src={imgRemove} alt="" className={styles.imgRemove} onClick={() => { onRemove(item.id) }} />
                            <input type="checkbox" checked={item.isImportant} onChange={(e) => {
                                const checked = e.target.checked
                                const importantId = item.id
                                onImportant(importantId, checked)
                            }} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoImportant;