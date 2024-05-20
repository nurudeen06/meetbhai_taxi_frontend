import { GET_ALL_PRICE_DATE, ADD_ROOM_PRICE, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllpriceDate: [],
    ADD_ROOM_PRICE: [],
};

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRICE_DATE:
            return {
                ...state,
                getAllpriceDate: action.payload
            };
        case ADD_ROOM_PRICE:
            return {
                ...state,
                addRoomPrice: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default inventoryReducer;