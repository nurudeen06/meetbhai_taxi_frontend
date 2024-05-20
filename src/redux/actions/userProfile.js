import { ApiPost } from "../../helper/axios";
import { ADD_USER_PROFILE,GET_USER_BOOK_DETAILS } from "../type";

export const getUserBookDetailsAction = (userId) => {
    return (dispatch) => {
        return ApiPost(`/api/user/booking-data`,userId)
            .then((res) => {
                dispatch({
                    type: GET_USER_BOOK_DETAILS,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_USER_BOOK_DETAILS,
                    payload: error,
                });
            });
    };
};

export const addUserProfileAction = (addUserData) => {
    return (dispatch) => {
        return ApiPost(`/api/user/store-data`,addUserData)
            .then((res) => {
                dispatch({
                    type: ADD_USER_PROFILE,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: ADD_USER_PROFILE,
                    payload: error,
                });
            });
    };
};

