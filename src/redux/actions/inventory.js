import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { GET_ALL_PRICE_DATE,ADD_ROOM_PRICE} from "../type";

export const getAllPriceDateAction = (body) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/get-all-room-price-by-date`,body)
            .then((res) => {
                dispatch({
                    type: GET_ALL_PRICE_DATE,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_PRICE_DATE,
                    payload: error,
                });
            });
    };
};

export const addRoomPriceAction = (addRoomPriceData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/set-room-price`, addRoomPriceData)
            .then((res) => {
                dispatch({
                    type: ADD_ROOM_PRICE,
                    payload: res.data,
                });
                // dispatch(getAllPriceDateAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_ROOM_PRICE,
                    payload: error,
                });
            });
    };
};