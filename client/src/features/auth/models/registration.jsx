// src/features/auth/models/registration.jsx
import axios from "axios";
import store from "../../../app/reducers/userReducer";
import { setError } from "../../../app/reducers/errorReducer";

const useRegistration = () => {
    const dispatch = store.dispatch;

    const registration = async (email, password) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/signup",
                {
                    email,
                    password,
                }
            );
            console.log(response.status);
            console.log(response.data.message);
            return response;
        } catch (e) {
            console.log(e.response.status);
            console.log(e.response.data.message);
            dispatch(
                setError(e.response ? e.response.data.message : "Unknown error")
            );
            throw e; // Rethrow the error to propagate it to the caller
        }
    };

    return { registration };
};

export default useRegistration;
