const TodoImportant = () => {
    const todos = JSON.parse(localStorage.getItem('all'))

    const importantTodos = todos.filter((item) => item.isImportant === true)

    return (
        <div>
            {importantTodos.map((item) => {
                return <h2 key={item.id}>{item.todo}</h2>
            })}
        </div>
    )
}

export default TodoImportant;