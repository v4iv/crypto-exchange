/**
 * Created by vaibhav on 9/5/18
 */
import {CRYPTO_LIST_FAILURE, CRYPTO_LIST_REQUEST, CRYPTO_LIST_SUCCESS} from "./actions";

const INITIAL_STATE = {
    cryptoList: {
        data: [],
        error: null,
        loading: false
    }
};

export default function cryptoListReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CRYPTO_LIST_REQUEST:
            return {
                ...state,
                cryptoList: {
                    data: [],
                    error: null,
                    loading: true
                }
            };
        case CRYPTO_LIST_SUCCESS:
            return {
                ...state,
                cryptoList: {
                    data: action.payload,
                    error: null,
                    loading: false
                }
            };
        case CRYPTO_LIST_FAILURE:
            return {
                ...state,
                cryptoList: {
                    data: [],
                    error: action.payload,
                    loading: false
                }
            };
        default:
            return state;
    }
}