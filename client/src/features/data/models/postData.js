import axios from "axios";
import { useDispatch } from "react-redux";
import { setError } from "../../../app/reducers/errorReducer";

const usePostData = () => {
  const dispatch = useDispatch();

  const postData = async (chatId, parentId, address, additionalData) => {

    try {
      const response = await axios.post(
        "http://localhost:5000/api/data/add-address",
        {
          chatId,
          parentId,
          address,
          additionalData,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
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

  return { postData };



};

export default usePostData;

