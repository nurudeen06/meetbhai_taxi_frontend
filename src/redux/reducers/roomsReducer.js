import { GET_ALL_ROOMS, ADD_ROOM, UPDATE_ROOM, RESET_GLOBAL_STATE, DELETE_IMAGE,GET_SINGLE_ROOMS } from '../type';

const initialState = {
    getAllRooms: [],
    getSingleRoomsData:[],
    addRoom: [],
    updateRoom: [],
    deleteImage: [],
    

};

const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ROOMS:
            return {
                ...state,
                getAllRooms: action.payload
            };
            case GET_SINGLE_ROOMS:
                return {
                    ...state,
                    getSingleRoomsData: action.payload
                };
        case ADD_ROOM:
            return {
                ...state,
                addRoom: action.payload
            };
        case UPDATE_ROOM:
            return {
                ...state,
                updateRoom: action.payload
            };
        case DELETE_IMAGE:
            return {
                ...state,
                deleteImage: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default roomsReducer;