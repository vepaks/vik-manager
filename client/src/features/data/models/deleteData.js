import axios from 'axios';

export const DELETE_ADDRESS_REQUEST = 'DELETE_ADDRESS_REQUEST';
export const DELETE_ADDRESS_SUCCESS = 'DELETE_ADDRESS_SUCCESS';
export const DELETE_ADDRESS_FAILURE = 'DELETE_ADDRESS_FAILURE';

const deleteAddressRequest = () => ({
  type: DELETE_ADDRESS_REQUEST,
});

const deleteAddressSuccess = (id) => ({
  type: DELETE_ADDRESS_SUCCESS,
  payload: id,
});

const deleteAddressFailure = (error) => ({
  type: DELETE_ADDRESS_FAILURE,
    payload: error,
});

export const deleteAddress = (id) => async (dispatch) => {
    dispatch(deleteAddressRequest());
    try {
        const response = await axios.delete(`http://localhost:5000/api/data/delete-address/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log(response.data.message);
        dispatch(deleteAddressSuccess(id));
    } catch (error) {
        console.error(error.message);
        dispatch(deleteAddressFailure(error.message));
    }
};
