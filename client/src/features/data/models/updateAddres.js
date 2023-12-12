import axios from 'axios';

export const UPDATE_ADDRESS_REQUEST = 'UPDATE_ADDRESS_REQUEST';
export const UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS';
export const UPDATE_ADDRESS_FAILURE = 'UPDATE_ADDRESS_FAILURE';

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

export const updateAddress = (id, updatedData) => async (dispatch) => {
    dispatch(updateAddressRequest());
    try {
        const response = await axios.put(`http://localhost:5000/api/data/update/${id}`, updatedData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        console.log(response.data); // Assuming the server returns the updated address

        dispatch(updateAddressSuccess(response.data));
    } catch (error) {
        console.error(error.message);
        dispatch(updateAddressFailure(error.message));
    }
};
