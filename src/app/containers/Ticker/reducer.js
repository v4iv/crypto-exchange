/**
 * Created by vaibhav on 10/5/18
 */
import {CRYPTO_TICKER_FAILURE, CRYPTO_TICKER_REQUEST, CRYPTO_TICKER_SUCCESS} from "./actions";

const INITIAL_STATE = {
    cryptoTicker: {
        data: {},
        error: null,
        loading: false
    }
};

export default function cryptoTickerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CRYPTO_TICKER_REQUEST:
            return {
                ...state,
                cryptoTicker: {
                    data: {},
                    error: null,
                    loading: true
                }
            };
        case CRYPTO_TICKER_SUCCESS:
            return {
                ...state,
                cryptoTicker: {
                    data: action.payload,
                    error: null,
                    loading: false
                }
            };
        case CRYPTO_TICKER_FAILURE:
            return {
                ...state,
                cryptoTicker: {
                    data: {},
                    error: action.payload,
                    loading: false
                }
            };
        default:
            return state;
    }
}