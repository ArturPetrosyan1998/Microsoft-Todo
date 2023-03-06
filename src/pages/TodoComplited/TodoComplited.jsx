import { useSelector } from "react-redux";
import { getComplited } from "../../redux/selectors/getComplited";
import styles from "./TodoComplited.module.scss"
const TodoComplited = () => {
    const todos = useSelector((state) => getComplited(state))

    return (
        <div className={styles.container}>{
            todos.map((item) => {
                return (
                    <h2 key={item.id}>{item.todo}</h2>
                )
            })
        }</div>
    )
}

export default TodoComplited;