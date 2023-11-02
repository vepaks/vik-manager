import axios from "axios";

export const login  = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password
        })
        console.log(response.status)
        console.log(response.data.message)
    } catch (e) {

        console.log(e.response.status)
        console.log(e.response.data.message)
    }
}