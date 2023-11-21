import axios from "axios";
import {setFiles} from "../../app/reducers/fileReducer";
import {setError} from "../../app/reducers/errorReducer";

export function getFiles(dirId) {
  return async (dispatch) => {
    try {
      //Взимаме данните от сървъра fileController.getFiles
      const response = await axios.get(
        //правим проверка за празен параметър - ако не е празен добавяме текушия, ако е - добавяме празен стринг
        `http://localhost:5000/api/files${dirId ? "?parent=" + dirId : ""}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );
      dispatch(setFiles(response.data))
    } catch (e) {
      dispatch(setError(e.response.data.message));
      console.log(e.response.data.message);
    }
  };
}
