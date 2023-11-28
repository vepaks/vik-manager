import axios from "axios";
import {setUser} from "../../../app/reducers/userReducer";

export const login  = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", JSON.stringify(response.data.user))
            console.log(response.data.user.id)
        } catch (e) {
            console.log(e.response.status)
            console.log(e.response.data.message)
        }
    }

}