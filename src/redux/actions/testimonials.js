import {ApiPost, ApiPut } from "../../helper/axios";
import { ADD_TESTIMONIAL, GET_ALL_TESTIMONIALS, UPDATE_TESTIMONIAL, DELETE_TESTIMONIAL } from "../type";

export const getAllTestimonialsAction = () => {
    return (dispatch) => {
        return ApiPost(`/api/admin/testimonials/all`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_TESTIMONIALS,
                    payload: res?.data?.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_TESTIMONIALS,
                    payload: error,
                });
            });
    };
};

export const addTestimonialsAction = (addTestimonialsData) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/testimonials/create`, addTestimonialsData)
            .then((res) => {
                dispatch({
                    type: ADD_TESTIMONIAL,
                    payload: res.data,
                });
                dispatch(getAllTestimonialsAction());
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TESTIMONIAL,
                    payload: error,
                });
            });
    };
};

export const updateTestimonialsAAction = (updateTestimonialData) => {
    return (dispatch) => {
        return ApiPut(`/api/admin/testimonials/${updateTestimonialData.id}`, updateTestimonialData)
            .then((res) => {
                dispatch({
                    type: UPDATE_TESTIMONIAL,
                    payload: res.data,
                });
                dispatch(getAllTestimonialsAction());
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_TESTIMONIAL,
                    payload: error,
                });
            });
    };
};

export const deleteTestimonialsAction = (deleteTestimonialId) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/testimonials/${deleteTestimonialId}`)
            .then((res) => {
                dispatch({
                    type: DELETE_TESTIMONIAL,
                    payload: res.data,
                });
                dispatch(getAllTestimonialsAction());
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_TESTIMONIAL,
                    payload: error,
                });
            });
    };
};
