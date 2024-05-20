import {ApiPost, ApiPut } from "../../helper/axios";
import { ADD_DIS_VOUCHER, GET_ALL_DIS_VOUCHER, UPDATE_DIS_VOUCHER, DELETE_DIS_VOUCHER } from "../type";

export const getAllDisVoucherAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/coupan/all`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_DIS_VOUCHER,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_DIS_VOUCHER,
                    payload: error,
                });
            });
    };
};

export const addDisVoucherAction = (addDisVoucherData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/coupan/store`, addDisVoucherData)
            .then((res) => {
                dispatch({
                    type: ADD_DIS_VOUCHER,
                    payload: res.data,
                });
                dispatch(getAllDisVoucherAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_DIS_VOUCHER,
                    payload: error,
                });
            });
    };
};

export const updateDisVoucherAction = (updateDisVoucherData) => {
    return (dispatch) => {
        return ApiPut(`/api/admin/coupan/${updateDisVoucherData.id}`, updateDisVoucherData)
            .then((res) => {
                dispatch({
                    type: UPDATE_DIS_VOUCHER,
                    payload: res.data,
                });
                dispatch(getAllDisVoucherAction());
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_DIS_VOUCHER,
                    payload: error,
                });
            });
    };
};

export const deleteDisVoucherAction = (deleteDisVoucherId) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/coupan/${deleteDisVoucherId}`)
            .then((res) => {
                dispatch({
                    type: DELETE_DIS_VOUCHER,
                    payload: res.data,
                });
                dispatch(getAllDisVoucherAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_DIS_VOUCHER,
                    payload: error,
                });
            });
    };
};
