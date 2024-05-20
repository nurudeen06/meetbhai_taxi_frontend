import { ADD_BOOKING, GET_ALL_BOOKING,RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllBookingData:[],
    addBookingDate: [],

};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BOOKING:
            return {
                ...state,
                getAllBookingData: action.payload
            };
        case ADD_BOOKING:
            return {
                ...state,
                addBookingDate: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default bookingReducer;