const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"

const defaultSpate = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = defaultSpate, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      }
      case LOGOUT:
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("theme")
      return {
        ...state,
        currentUser: {},
        isAuth: false
      }
    default:
      return state;
  }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})