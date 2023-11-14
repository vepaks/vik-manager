const GET_DATA = "GET_DATA"

const defaultState = {
    data: []
}

export default function dataReducer (state = defaultState, action) {
    switch (action.type){
        case GET_DATA: return {...state, data: action.payload}
        default:
            return state;
    }
}

export const setData = (data) => ({type: GET_DATA, payload: data})