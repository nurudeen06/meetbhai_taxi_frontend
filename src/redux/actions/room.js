import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_ROOM, GET_ALL_ROOMS, UPDATE_ROOM, DELETE_IMAGE , GET_SINGLE_ROOMS,DELETE_ROOM} from "../type";

export const getAllRoomsAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/get-room-type`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_ROOMS,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_ROOMS,
                    payload: error,
                });
            });
    };
};

export const getSingleRoomDataAction = (room_id) => {
    return (dispatch) => {
        return ApiPost(`/api/get-room-type-by-id`, room_id)
            .then((res) => {
                dispatch({
                    type: GET_SINGLE_ROOMS,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_SINGLE_ROOMS,
                    payload: error,
                });
            });
    };
};

export const addRoomsAction = (addROOMData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/add-rooms`, addROOMData)
        // return ApiPost(`/api/admin/add-image-to-room`, addROOMData)

            .then((res) => {
                const newRoomId = res?.data?.room_type?._id;
                localStorage.setItem('newRoomId', newRoomId);
                dispatch({
                    type: ADD_ROOM,
                    payload: res.data,
                });
                dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_ROOM,
                    payload: error,
                });
            });
    };
};

export const updateRoomsAction = (updateRoomData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/edit-rooms/${updateRoomData?._id}`, updateRoomData)
            .then((res) => {
                dispatch({
                    type: UPDATE_ROOM,
                    payload: res.data,
                });
                dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_ROOM,
                    payload: error,
                });
            });
    };
};

export const deleteImageAction = (deleteData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/remove-image/`, deleteData)
            .then((res) => {
                dispatch({
                    type: DELETE_IMAGE,
                    payload: res.data,
                });
                dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_IMAGE,
                    payload: error,
                });
            });
    };
};


export const deleteRoomAction = (deleteId) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/room-type/${deleteId}/destroy`)
            .then((res) => {
                    dispatch({
                        type: DELETE_ROOM,
                        payload: res.data,
                    });
                    dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_ROOM,
                    payload: error,
                });
            });
    };
};
