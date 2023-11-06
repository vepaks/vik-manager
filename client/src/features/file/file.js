import axios from "axios";

export function getFiles(dirId) {
  return async (dispatch) => {
    try {
      //Взимаме данните от сървъра fileController.getFiles
      const responce = await axios.get(
        //правим проверка за празен параметър - ако не е празен добавяме текушия, ако е - добавяме празен стринг
        `https://localhost:5000/api/files${dirId ? "?parent=" + dirId : ""}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );
    } catch (e) {
      console.log(e.response.data.message);
    }
  };
}
