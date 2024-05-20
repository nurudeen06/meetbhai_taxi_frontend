import { GET_USER_BOOK_DETAILS,ADD_USER_PROFILE,RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getUserBookDetailsData:[],
    addUserProfileData: [],
   

};

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BOOK_DETAILS:
            return {
                ...state,
                getUserBookDetailsData: action.payload
            };
        case ADD_USER_PROFILE:
            return {
                ...state,
                addUserProfileData: action.payload
            };
      
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default userProfileReducer;