import {setError} from "../../../app/reducers/errorReducer";
import axios from "axios";
import {useDispatch} from "react-redux";

export const registration = async (email, password) => {

    try {
        const response = await axios.post("http://localhost:5000/api/auth/signup", {
            email,
            password,
        });
        console.log(response.status);
        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.status);
        console.log(e.response.data.message);
    }
};

//TODO make a custom Hook registration


//// registrationHook.js
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { setError } from '../../../app/reducers/errorReducer';
//
// const useRegistration = () => {
//   const dispatch = useDispatch();
//
//   const registration = async (email, password) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/signup', {
//         email,
//         password,
//       });
//
//       console.log(response.status);
//       console.log(response.data.message);
//     } catch (e) {
//       console.log(e.response.status);
//       console.log(e.response.data.message);
//
//       // Dispatch the setError action to update the error state
//       dispatch(setError(e.response.data.message));
//     }
//   };
//
//   return { registration };
// };
//
// export default useRegistration;