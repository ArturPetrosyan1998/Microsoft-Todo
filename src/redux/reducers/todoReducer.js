export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO"
export const ADD_IMPORTANT = "ADD_IMPORTANT"
const toDoReducer = (state = [], { type, todo, id, importantId, checked, importantTodo } = {}) => {
    switch (type) {
        case ADD_TODO: return [...state, { todo, id, isImportant : false }]
        case REMOVE_TODO: return state.filter((item) => item.id !== id);
        case ADD_IMPORTANT: return state.map((item) => {
            if (item.id === importantId) {
                return { ...item, isImportant: checked }
            } else {
                return { ...item }
            }
        })
        default: return state
    }
}

export default toDoReducer;