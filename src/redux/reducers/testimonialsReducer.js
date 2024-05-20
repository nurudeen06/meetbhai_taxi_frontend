import { GET_ALL_TESTIMONIALS, ADD_TESTIMONIAL, UPDATE_TESTIMONIAL, RESET_GLOBAL_STATE, DELETE_TESTIMONIAL } from '../type';

const initialState = {
    getAllTestimonials: [],
    addTestimonial: [],
    updateTestimonial: [],
    deleteTestimonial: [],

};

const testimonialsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TESTIMONIALS:
            return {
                ...state,
                getAllTestimonials: action.payload
            };
        case ADD_TESTIMONIAL:
            return {
                ...state,
                addTestimonial: action.payload
            };
        case UPDATE_TESTIMONIAL:
            return {
                ...state,
                updateTestimonial: action.payload
            };
        case DELETE_TESTIMONIAL:
            return {
                ...state,
                deleteTestimonial: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default testimonialsReducer;