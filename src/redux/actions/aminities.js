import { ADD_AMINITIES } from "../type";

export const addAminitesAction = (addAminitiesData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/add-aminities`, addAminitiesData)
        // return ApiPost(`/api/admin/add-image-to-room`, addROOMData)

            .then((res) => {
                // const newRoomId = res?.data?.room_type?._id;
                // localStorage.setItem('newRoomId', newRoomId);
                dispatch({
                    type: ADD_AMINITIES,
                    payload: res.data,
                });
                dispatch(getAllRoomsAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_AMINITIES,
                    payload: error,
                });
            });
    };
};