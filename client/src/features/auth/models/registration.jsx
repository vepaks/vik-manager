import axios from "axios";
import {redirectToLogin} from "../../../shared/lib/redirects/toLogin/redirectToLogin";

export const registration  = async (email, password) => {
   try {
       const response = await axios.post("http://localhost:5000/api/auth/signup", {
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