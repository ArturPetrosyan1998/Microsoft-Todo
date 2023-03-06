export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO"
export const ADD_IMPORTANT = "ADD_IMPORTANT";
export const ADD_COMPLITED = "ADD_COMPLITED";
const localTodos = JSON.parse(localStorage.getItem('all')) || [];


const toDoReducer = (state = localTodos, { type, todo, id, importantId, checked, complitedId } = {}) => {
    switch (type) {
        case ADD_TODO: return [...state, { todo, id, isImportant: '', isComplited: null }]
        case REMOVE_TODO: return state.filter((item) => item.id !== id);
        case ADD_IMPORTANT: return state.map(
            (item) => importantId === item.id ? { ...item, isImportant: checked } : { ...item }
        )
        case ADD_COMPLITED: return state.map(
            (item) => complitedId === item.id ? { ...item, isComplited: true } : { ...item }
        )
        default: return state
    }
}

export default toDoReducer;


