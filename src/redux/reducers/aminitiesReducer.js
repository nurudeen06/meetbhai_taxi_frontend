import { ADD_AMINITIES, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    addAminitiesDate: [],
   

};

const aminitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AMINITIES:
            return {
                ...state,
                addAminitiesDate: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default aminitiesReducer;