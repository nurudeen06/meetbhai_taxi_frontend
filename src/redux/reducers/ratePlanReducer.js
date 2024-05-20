import { GET_ALL_RATE_PLAN, ADD_RATE_PLAN, UPDATE_RATE_PLAN, RESET_GLOBAL_STATE, DELETE_RATE_PLAN,STATUS_RATE_PLAN } from '../type';

const initialState = {
    getAllRatePlan: [],
    addRatePlan: [],
    updateRatePlan: [],
    deleteRatePlan: [],
    statusRatePlan:[],

};



const ratePlansReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RATE_PLAN:
            return {
                ...state,
                getAllRatePlan: action.payload
            };
        case ADD_RATE_PLAN:
            return {
                ...state,
                addRatePlan: action.payload
            };
            case STATUS_RATE_PLAN:
                return {
                    ...state,
                    statusRatePlan: action.payload
                };
        case UPDATE_RATE_PLAN:
            return {
                ...state,
                updateRatePlan: action.payload
            };
        case DELETE_RATE_PLAN:
            return {
                ...state,
                deleteRatePlan: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default ratePlansReducer;