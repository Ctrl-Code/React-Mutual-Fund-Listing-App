import { combineReducers } from 'redux';

import login from "./login";
import signup from "./signup";
import details from "./details";

export default combineReducers({
    login,
    signup,
    details,
});