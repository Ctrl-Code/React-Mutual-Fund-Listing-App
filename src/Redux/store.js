import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from "redux";
import combinedReducers from "./Reducers";

const store = createStore(combinedReducers, composeWithDevTools());

export default store;