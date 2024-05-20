import { ApiPost } from "../../helper/axios";
import { GET_DASHBOARD_DATA } from "../type";

export const getAllDashBoardDataAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/dashboard/data`)
            .then((res) => {
                console.log("res",res);
                dispatch({
                    type: GET_DASHBOARD_DATA,
                    payload: res?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_DASHBOARD_DATA,
                    payload: error,
                });
            });
    };
};