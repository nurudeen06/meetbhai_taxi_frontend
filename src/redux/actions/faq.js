import {ApiPost, ApiPut } from "../../helper/axios";
import { ADD_FAQ, GET_ALL_FAQS, UPDATE_FAQ, DELETE_FAQ } from "../type";

export const getAllFaqsAction = () => {
    return (dispatch) => {
        return ApiPost(`/admin/faq/all`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_FAQS,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_FAQS,
                    payload: error,
                });
            });
    };
};

export const addfaqAction = (addFaqData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/faq/add`, addFaqData)
            .then((res) => {
                dispatch({
                    type: ADD_FAQ,
                    payload: res.data,
                });
                dispatch(getAllFaqsAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_FAQ,
                    payload: error,
                });
            });
    };
};

export const updateFaqAction = (updateFaqData) => {
    return (dispatch) => {
        return ApiPut(`/api/admin/faq/${updateFaqData.id}`, updateFaqData)
            .then((res) => {
                dispatch({
                    type: UPDATE_FAQ,
                    payload: res.data,
                });
                dispatch(getAllFaqsAction());
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_FAQ,
                    payload: error,
                });
            });
    };
};

export const deleteFaqAction = (deleteFaqId) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/faq/${deleteFaqId}`)
            .then((res) => {
                dispatch({
                    type: DELETE_FAQ,
                    payload: res.data,
                });
                dispatch(getAllFaqsAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_FAQ,
                    payload: error,
                });
            });
    };
};
