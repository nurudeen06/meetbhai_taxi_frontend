import { GET_ALL_DIS_VOUCHER,ADD_DIS_VOUCHER,UPDATE_DIS_VOUCHER,DELETE_DIS_VOUCHER, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllDisVoucher: [],
    addDisVoucher: [],
    updateDisVoucher: [],
    deleteDisVoucher: [],


};

const disVoucherReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_DIS_VOUCHER:
            return {
                ...state,
                getAllDisVoucher: action.payload
            };
        case ADD_DIS_VOUCHER:
            return {
                ...state,
                addDisVoucher: action.payload
            };
        case UPDATE_DIS_VOUCHER:
            return {
                ...state,
                updateDisVoucher: action.payload
            };
        case DELETE_DIS_VOUCHER:
            return {
                ...state,
                deleteDisVoucher: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default disVoucherReducer;