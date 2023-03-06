export const getImportant = (state) => {
    return state.todos.filter((item) => item.isImportant === true)
}