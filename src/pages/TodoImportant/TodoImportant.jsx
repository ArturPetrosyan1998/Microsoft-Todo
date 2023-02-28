import { useSelector } from "react-redux";


const TodoImportant = () => {
    const todos = useSelector((state) => {
        return state.todos.filter((item) => {
            return item.isImportant === true
        })
    })
    console.log(todos);
    return (
        <div>
            {todos.map((item) => {
              return (
                <h2 key={item.id}>{item.todo}</h2>
              )
            })}
        </div>
    )
}

export default TodoImportant;