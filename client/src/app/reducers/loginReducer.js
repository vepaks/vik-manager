const GET_EMAIL = "GET_EMAIL"
const GET_PASSWORD = "GET_PASSWORD"

const defaultState = {
        email: "",
        password: ""
}

export default function loginReducer (state = defaultState, action) {
    switch (action.type){
        case GET_EMAIL: return {...state, email: action.payload}
        case GET_PASSWORD: return {...state, password: action.payload}
        default:
            return state;
    }
}

export const setEmail = (email) => ({type: GET_EMAIL, payload: email})
export const setPassword = (password) => ({type: GET_PASSWORD, payload: password})

