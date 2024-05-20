import { GET_DASHBOARD_DATA,RESET_GLOBAL_STATE} from "../type";

const initialState = {
    getAllDashBoardData: [],
};

const dashBoardReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DASHBOARD_DATA:
            return {
                ...state,
                getAllDashBoardData: action.payload
            };
       
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default dashBoardReducer;