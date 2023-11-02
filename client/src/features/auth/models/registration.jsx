import axios from "axios";

export const registration  = async (email, password) => {
   try {
       const response = await axios.post("http://localhost:5000/api/auth/signup", {
           email,
           password
       })
       console.log(response.data.message)
   } catch (e) {
       console.log(e.response.data.message)
   }
}