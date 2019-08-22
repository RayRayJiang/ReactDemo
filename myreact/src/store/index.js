
import { createStore, combineReducers } from "redux";
import { TokenReducer } from "./reducers";

const rootReducer = combineReducers({
    getToken: TokenReducer
})

const store = createStore(rootReducer);

export default store;