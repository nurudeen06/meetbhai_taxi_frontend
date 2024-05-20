import axios from 'axios';
import { ApiPost, BaseURL } from '../../helper/axios';
import { MULTIPLE_UPLOAD_IMAGES,DELETE_IMAGE,DELETE_VIDEO } from '../type'

export const imageUploadAction = async (payload) => {
    const config = {
        headers: {
            "content-type": "multipart/form-data",
        },
    };
    try {
        const res = await axios.post(`${BaseURL}/api/admin/add-image-to-room`, payload, config);
        return res;
    } catch (error) {
        return error;
    }
};

export const multipleUploadImagesAction = (images) => ({
  type: MULTIPLE_UPLOAD_IMAGES,
  payload: images,
});



export const deleteImageAction = (deleteImage) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/remove-image`,deleteImage)
            .then((res) => {
                if (res?.status === 201) {
                    dispatch({
                        type: DELETE_IMAGE,
                        payload: res.data
                    });
                }

            }).catch((error) => {
                dispatch({
                    type: DELETE_IMAGE,
                    payload: error,
                });
            });
    };
};

export const deleteVideoAction = (deleteVideo) => {
    return (dispatch) => {
        return ApiPost(`/api/admin/remove-image`,deleteVideo)
            .then((res) => {
                if (res?.status === 201) {
                    dispatch({
                        type: DELETE_VIDEO,
                        payload: res.data
                    });
                }

            }).catch((error) => {
                dispatch({
                    type: DELETE_VIDEO,
                    payload: error,
                });
            });
    };
};