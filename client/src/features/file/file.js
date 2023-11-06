import axios from "axios";

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
      console.log(response.data)
    } catch (e) {
      console.log(e.response.data.message);
    }
  };
}
