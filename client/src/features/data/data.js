import axios from "axios";
import { setData } from "../../app/reducers/dataReducer";
import {setError} from "../../app/reducers/errorReducer";

export function getData() {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/data", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setData(response.data));
    } catch (e) {
      dispatch(setError(e.response.data.message));
      console.log(e);
    }
  };
}
