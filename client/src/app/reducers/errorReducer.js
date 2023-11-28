const SET_ERROR = "GET_ERROR"

const defaultState = {
    error: []
}

export default function errorReducer (state = defaultState, action) {
    switch (action.type){
        case SET_ERROR: return {...state, error: action.payload}
        default:
            return state;
    }
}

export const setError = (error) => ({type: SET_ERROR, payload: error})