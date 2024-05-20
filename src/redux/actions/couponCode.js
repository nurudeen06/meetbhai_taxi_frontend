import { ApiPost } from "../../helper/axios";
import { ADD_COUPONCODE,GET_ALL_COUPONCODE,EDIT_COUPONCODE,CHECK_COUPONCODE,DELETE_COUPONCODE} from "../type";

export const getAllCouponCodeAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/coupan/all`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_COUPONCODE,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_COUPONCODE,
                    payload: error,
                });
            });
    };
};

export const addCouponCodeAction = (addCouponCodeData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/coupan/store`, addCouponCodeData)
        // return ApiPost(`/api/admin/add-image-to-room`, addROOMData)

            .then((res) => {
                // const newRoomId = res?.data?.room_type?._id;
                // localStorage.setItem('newRoomId', newRoomId);
                dispatch({
                    type: ADD_COUPONCODE,
                    payload: res.data,
                });
                dispatch(getAllCouponCodeAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_COUPONCODE,
                    payload: error,
                });
            });
    };
};

export const editCouponCodeAction = (editCouponCodeData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/coupan/${editCouponCodeData?._id}/edit`, editCouponCodeData)

            .then((res) => {
                dispatch({
                    type: EDIT_COUPONCODE,
                    payload: res.data,
                });
                dispatch(getAllCouponCodeAction());
            })
            .catch((error) => {
                dispatch({
                    type: EDIT_COUPONCODE,
                    payload: error,
                });
            });
    };
};

export const deleteCouponCodeAction = (deleteId) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/coupan/${deleteId}/delete`)
            .then((res) => {
                dispatch({
                    type:   DELETE_COUPONCODE,
                    payload: res.data,
                });
                dispatch(getAllCouponCodeAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_COUPONCODE,
                    payload: error,
                });
            });
    };
};

export const CheckCouponCodeAction = (checkCouponCode) => {
    return (dispatch) => {
        return ApiPost(`/api/coupan-check`,checkCouponCode)
            .then((res) => {
                dispatch({
                    type: CHECK_COUPONCODE,
                    payload: res.data,
                });
                dispatch(getAllCouponCodeAction());
            })
            .catch((error) => {
                dispatch({
                    type: CHECK_COUPONCODE,
                    payload: error,
                });
            });
    };
};