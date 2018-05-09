/**
 * Created by vaibhav on 9/5/18
 */
import {combineReducers} from "redux";
import cryptoListReducer from "../app/containers/HomePage/reducer";

const rootReducer = combineReducers({
    cryptoListReducer: cryptoListReducer,
});

export default rootReducer;
