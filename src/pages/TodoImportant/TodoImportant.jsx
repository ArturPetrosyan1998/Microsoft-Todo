import { useDispatch } from "react-redux"
import { removeTodo } from "../../redux/actions/todo"
import styles from "./TodoImportant.module.scss"
import imgRemove from '../TodoList/assets/Icons/remove.svg'
const TodoImportant = () => {
    const todos = JSON.parse(localStorage.getItem('all')).filter((item) => item.isImportant === true)
    const dispatch = useDispatch()
    const onRemove = (id) => {
        dispatch(removeTodo(id))
    }
    return (
        <div className={styles.container}>
            {todos.map((item) => {
                return (
                    <div key={item.id} className={styles.content}>
                        <h2 >{item.todo}</h2>
                        <div className={styles.icons}>
                            <img src={imgRemove} alt="" className={styles.imgRemove} onClick={() => {
                                onRemove(item.id)
                            }} />
                            <input type="checkbox" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoImportant;