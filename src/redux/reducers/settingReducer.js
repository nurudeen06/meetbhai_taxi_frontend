import { ADD_SETTING, GET_ALL_SETTING,RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllBookingData:[],
    addBookingDate: [],
   

};

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SETTING:
            return {
                ...state,
                getAllBookingData: action.payload
            };
        case ADD_SETTING:
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

export default settingReducer;