import { useSelector } from "react-redux";

const TodoComplited = () => {
    const todos = useSelector((state) => {
        return state.todos.filter((item) => {
            return item.isComplited === true
        })
    })

    return (
        <div>{
            todos.map((item) => {
                return (
                    <h2 key={item.id}>{item.todo}</h2>
                )
            })
        }</div>
    )
}

export default TodoComplited;