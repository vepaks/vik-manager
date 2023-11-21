const GET_ERROR = "GET_ERROR"

const defaultState = {
    error: []
}

export default function errorReducer (state = defaultState, action) {
    switch (action.type){
        case GET_ERROR: return {...state, error: action.payload}
        default:
            return state;
    }
}

export const setError = (error) => ({type: GET_ERROR, payload: error})