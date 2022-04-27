import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  bank: bankReducer,
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer;
