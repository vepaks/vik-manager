import axios from "axios";
import usePostData from "./postData";

export const UPDATE_ADDRESS_REQUEST = "UPDATE_ADDRESS_REQUEST";
export const UPDATE_ADDRESS_SUCCESS = "UPDATE_ADDRESS_SUCCESS";
export const UPDATE_ADDRESS_FAILURE = "UPDATE_ADDRESS_FAILURE";

const updateAddressRequest = () => ({
  type: UPDATE_ADDRESS_REQUEST,
});

const updateAddressSuccess = (updatedAddress) => ({
  type: UPDATE_ADDRESS_SUCCESS,
  payload: updatedAddress,
});

const updateAddressFailure = (error) => ({
  type: UPDATE_ADDRESS_FAILURE,
  payload: error,
});

export const useUpdateAddress = () => async (dispatch) => {
  dispatch(updateAddressRequest());

  const updateAddress = async (
    id,
    chatId,
    parentId,
    address,
    additionalData,
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/data/update/${id}`,
        {
          chatId,
          parentId,
          address,
          additionalData,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );

      console.log(response.data);

      dispatch(updateAddressSuccess(response.data));
    } catch (error) {
      console.error(error.message);
      dispatch(updateAddressFailure(error.message));
    }
  };

  return { updateAddress };
};

export default useUpdateAddress;
