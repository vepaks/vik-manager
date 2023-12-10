const GET_DATA = "GET_DATA"
const DELETE_ADDRESS_SUCCESS = "DELETE_ADDRESS_SUCCESS";

const defaultState = {
    data: []
}

export default function dataReducer (state = defaultState, action) {
    switch (action.type){
        case GET_DATA: return {...state, data: action.payload}

        case DELETE_ADDRESS_SUCCESS:
            const updatedData = state.data.filter(address => address._id !== action.payload);
            return { ...state, data: updatedData };

        default:
            return state;
    }
}

export const setData = (data) => ({type: GET_DATA, payload: data})