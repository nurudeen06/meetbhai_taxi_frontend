import { ADD_GALLERY_DETAIL, RESET_GLOBAL_STATE, MULTIPLE_UPLOAD_IMAGES,DELETE_IMAGE ,DELETE_VIDEO} from '../type'

const initialState = {
    addGallerydetail: [],
    images: [],
    videoes: [],
    deleteImage:[],
    deleteVideo:[],
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GALLERY_DETAIL:
            return {
                ...state,
                addGallerydetail: action.payload
            };
        case MULTIPLE_UPLOAD_IMAGES:
            return {
                ...state,
                images: action.payload
            };
        case DELETE_IMAGE:
            return {
                ...state,
                deleteImage: action.payload
            };
        case DELETE_VIDEO:
            return {
                ...state,
                deleteVideo: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }

}
export default imageReducer;