import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer.js";
import toastReducer from "./toast/toastReducer.js";


// create root reducer
const rootReducer = combineReducers({
    auth : AuthReducer,
    toast : toastReducer,
});

export default rootReducer;