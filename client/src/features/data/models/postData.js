import axios from "axios";
import { setData } from "../../../app/reducers/dataReducer";

export function postData() {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/data", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setData(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
