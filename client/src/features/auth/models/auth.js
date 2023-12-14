import axios from "axios";
import {setUser} from "../../../app/reducers/userReducer";

export const auth  = () => {
    return async dispatch => {
        try {
            const response = await axios.get("/api/auth/auth",
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem("token", response.data.token)
            console.log(response.data)
        } catch (e) {
            console.log(e.response.data.message)
            console.log(e.response.status)
            localStorage.removeItem('token')
        }
    }
}