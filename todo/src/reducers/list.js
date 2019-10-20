export const initialState = [{ item: 'Test', completed: false }]


export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_LIST":
            return [...state, action.payload]
            
        case "CLEAR_LIST":
            return initialState
        case "COMPLETED_ITEM":
            return state.map(x => {
                if (x.item === action.payload) {
                    return {...x, completed: !x.completed}
                } return x;
            })
        default:
            return state;
    }
} 