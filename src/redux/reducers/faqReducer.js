import { ADD_FAQ, GET_ALL_FAQS, UPDATE_FAQ, DELETE_FAQ,RESET_GLOBAL_STATE } from "../type";

const initialState = {
    getAllFaqs: [],
    addFaq: [],
    updateFaq: [],
    deleteFaq: [],


};

const faqReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_FAQS:
            return {
                ...state,
                getAllFaqs: action.payload
            };
        case ADD_FAQ:
            return {
                ...state,
                addFaq: action.payload
            };
        case UPDATE_FAQ:
            return {
                ...state,
                updateFaq: action.payload
            };
        case DELETE_FAQ:
            return {
                ...state,
                deleteFaq: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default faqReducer;