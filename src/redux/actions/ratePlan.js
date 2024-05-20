import { ApiPost } from "../../helper/axios";
import { GET_ALL_RATE_PLAN,ADD_RATE_PLAN,UPDATE_RATE_PLAN,DELETE_RATE_PLAN,STATUS_RATE_PLAN  } from "../type";
import { getAllRoomsAction } from "./room";

export const getAllRatePlanAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/plans/all`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_RATE_PLAN,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_RATE_PLAN,
                    payload: error,
                });
            });
    };
};

export const addRatePlanAction = (addRatePlanData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/add-plans-to-rooms`, addRatePlanData)
        // return ApiPost(`/api/admin/add-image-to-room`, addROOMData)

            .then((res) => {
                // const newRoomId = res?.data?.room_type?._id;
                // localStorage.setItem('newRoomId', newRoomId);
                dispatch({
                    type: ADD_RATE_PLAN,
                    payload: res.data,
                });
                dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_RATE_PLAN,
                    payload: error,
                });
            });
    };
};

export const statusRatePlanAction = (statusRatePlanData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/room-type/plans/status`, statusRatePlanData)

            .then((res) => {
                dispatch({
                    type:STATUS_RATE_PLAN,
                    payload: res.data,
                });
                dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type:STATUS_RATE_PLAN,
                    payload: error,
                });
            });
    };
};

export const updateRatePlanAction = (updateratePlanData) => {
    return (dispatch) => {
        // return ApiPost(`/api/admin/plans/${updateratePlanData._id}/edit`, updateratePlanData)
        return ApiPost(`/api/admin/edit-plans-to-rooms`, updateratePlanData)
            .then((res) => {
                dispatch({
                    type: UPDATE_RATE_PLAN,
                    payload: res.data,
                });
                dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_RATE_PLAN,
                    payload: error,
                });
            });
    };
};

// export const addPlanRoomAction = (addPlanRoomData) => {
//     return (dispatch) => {
//         return ApiPost(`/api/admin/add-plans-to-rooms/`, addPlanRoomData)
//             .then((res) => {
//                 dispatch({
//                     type: ADD_PLAN_ROOM,
//                     payload: res.data,
//                 });
//                 dispatch(getAllRatePlanAction());
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: ADD_PLAN_ROOM,
//                     payload: error,
//                 });
//             });
//     };
// };

export const deleteRatePlanAction = (deleteData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/delete-plans-to-rooms`,deleteData)
            .then((res) => {
                    dispatch({
                        type: DELETE_RATE_PLAN,
                        payload: res.data,
                    });
                    dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_RATE_PLAN,
                    payload: error,
                });
            });
    };
};
