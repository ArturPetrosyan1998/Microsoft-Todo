export const getComplited = (state) => {
    return state.todos.filter((item) => item.isComplited === true)
}