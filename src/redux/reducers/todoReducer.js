export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO"

const toDoReducer = (state = [], { type }) => {
    switch (type) {
        case ADD_TODO: return [...state,"ok"]
        case REMOVE_TODO: return [];
        default: return state
    }
}

export default toDoReducer;