import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import userVerifyReducer from "./reducers/userVerifyReducer";
import userReducer from "./reducers/userReducer";
import roomsReducer from "./reducers/roomsReducer";
import imageReducer from "./reducers/imageReducer";
import ratePlansReducer from "./reducers/ratePlanReducer";
import aminitiesReducer from "./reducers/aminitiesReducer";
import testimonialsReducer from "./reducers/testimonialsReducer";
import bookingReducer from "./reducers/bookingReducer";
import disVoucherReducer from "./reducers/disVoucherReducer";
import faqReducer from "./reducers/faqReducer";
import settingReducer from "./reducers/settingReducer";
import inventoryReducer from "./reducers/inventoryReducer";
import dashBoardReducer from "./reducers/dashBoardReducer";
import couponCodeReducer from "./reducers/couponCodeReducer";
import userProfileReducer from "./reducers/userProfileReducer"
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
  authState: authReducer,
  userState: userReducer,
  userVerifyState: userVerifyReducer,
  roomsState: roomsReducer,
  imageState: imageReducer,
  ratePlanState:ratePlansReducer,
  aminitiesState:aminitiesReducer,
  inventoryState:inventoryReducer,
  testimonialsState:testimonialsReducer,
  bookingState:bookingReducer,
  disVoucherState:disVoucherReducer,
  faqState:faqReducer,
  settingState:settingReducer,
  dashBoardState:dashBoardReducer,
  couponCodeState:couponCodeReducer,
  userProfileState:userProfileReducer
});

const reduxstore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
  applyMiddleware(thunk)
);

export default reduxstore;
