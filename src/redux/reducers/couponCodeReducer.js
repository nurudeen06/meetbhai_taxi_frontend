import { GET_ALL_COUPONCODE, ADD_COUPONCODE, EDIT_COUPONCODE,DELETE_COUPONCODE,CHECK_COUPONCODE, RESET_GLOBAL_STATE } from "../type";

const initialState = {
  getAllCouponCode: [],
  addCouponCodeDate: [],
  editCouponCodedata: [],
  deleteCouponCodeData: [],
  checkCouponCodeData: [],
};

const couponCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUPONCODE:
      return {
        ...state,
        getAllCouponCode: action.payload,
      };
    case ADD_COUPONCODE:
      return {
        ...state,
        addCouponCodeDate: action.payload,
      };
    case EDIT_COUPONCODE:
      return {
        ...state,
        editCouponCodedata: action.payload,
      };
    case DELETE_COUPONCODE:
      return {
        ...state,
        deleteCouponCodeData: action.payload,
      };
    case CHECK_COUPONCODE:
      return {
        ...state,
        checkCouponCodeData: action.payload,
      };
    case RESET_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default couponCodeReducer;
