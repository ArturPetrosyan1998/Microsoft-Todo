export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO"

const toDoReducer = (state = [], { type, todo, id } = {}) => {
    switch (type) {
        case ADD_TODO: return [...state, { todo, id }]
        case REMOVE_TODO: return state.filter((item) => item.id !== id);
        default: return state
    }
}

export default toDoReducer;