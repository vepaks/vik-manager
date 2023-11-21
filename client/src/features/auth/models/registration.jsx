import axios from "axios";
import { setError } from "../../../app/reducers/errorReducer";

export const registration = async (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          email,
          password,
        },
      );
      console.log(response.status);
      console.log(response.data.message);
    } catch (e) {
      dispatch(setError(e.response.data.message));
      console.log(e.response.status);
      console.log(e.response.data.message);
    }
  };
};
