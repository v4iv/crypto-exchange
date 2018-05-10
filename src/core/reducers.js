/**
 * Created by vaibhav on 9/5/18
 */
import {combineReducers} from "redux";
import cryptoListReducer from "../app/containers/HomePage/reducer";
import cryptoTickerReducer from "../app/containers/Ticker/reducer";

const rootReducer = combineReducers({
    cryptoListReducer: cryptoListReducer,
    cryptoTickerReducer: cryptoTickerReducer,
});

export default rootReducer;
