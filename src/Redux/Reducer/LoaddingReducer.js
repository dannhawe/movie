
const initialState = {
    loadding : false
}

export const LoaddingReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ON_LOADDING': {
            return { ...state, loadding:true }
        }
        case 'OFF_LOADDING': {
            return { ...state, loadding:false }
        }

        default:
            return { ...state }
    }
}
