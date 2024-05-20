import { ADD_SETTING,GET_ALL_SETTING } from "../type";

export const getAllSettingAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/get-settings`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_SETTING,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_SETTING,
                    payload: error,
                });
            });
    };
};

export const addSettingAction = (addSettingData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/set-settings`, addSettingData)
        // return ApiPost(`/api/admin/add-image-to-room`, addROOMData)

            .then((res) => {
                // const newRoomId = res?.data?.room_type?._id;
                // localStorage.setItem('newRoomId', newRoomId);
                dispatch({
                    type: ADD_SETTING,
                    payload: res.data,
                });
                dispatch(getAllSettingAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_SETTING,
                    payload: error,
                });
            });
    };
};
