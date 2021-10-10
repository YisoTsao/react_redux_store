import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    bank: bankReducer,
    user: userReducer
})

export default rootReducer