import { ApiPost } from "../../helper/axios";
import { ADD_BOOKING,GET_ALL_BOOKING } from "../type";

export const getAllBookingAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/show-all-bookings`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_BOOKING,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_BOOKING,
                    payload: error,
                });
            });
    };
};

export const addBookingAction = (addBookingData) => {
    return (dispatch) => {
        return ApiPost(`/api/create-bookings`, addBookingData)
        // return ApiPost(`/api/admin/add-image-to-room`, addROOMData)

            .then((res) => {
                // const newRoomId = res?.data?.room_type?._id;
                // localStorage.setItem('newRoomId', newRoomId);
                dispatch({
                    type: ADD_BOOKING,
                    payload: res.data,
                });
                dispatch(getAllBookingAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_BOOKING,
                    payload: error,
                });
            });
    };
};
