export const initialState = {
    list: [{item: 'Test', completed: false}]
}

export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_LIST":
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case "CLEAR_LIST":
            return {
                ...state,
                list: state.list
            }
        case "COMPLETED_ITEM":
            return {
                list: state.list[action.payload] === false
            }
        default:
            return state;
    }
} 