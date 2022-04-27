import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import bookReducer from "./reducers/bookSlice";
import modalReducer from "./reducers/modalSlice";
// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    modal: modalReducer,
  },
});
