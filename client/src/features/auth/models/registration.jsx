import { useDispatch } from "react-redux";
import axios from "axios";
import { setError } from "../../../app/reducers/errorReducer";

const useRegistration = () => {
  const dispatch = useDispatch();

  const registration = async (email, password) => {
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
      console.log(e.response.status);
      console.log(e.response.data.message);
      dispatch(setError(e.response.data.message));
    }
  };

  return { registration };
};

export default useRegistration;
