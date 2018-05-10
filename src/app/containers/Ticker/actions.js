/**
 * Created by vaibhav on 10/5/18
 */
import axios from 'axios';
import {ROOT_URL} from "../../../core/config";

export const CRYPTO_TICKER_REQUEST = 'CRYPTO_TICKER_REQUEST';
export const CRYPTO_TICKER_SUCCESS = 'CRYPTO_TICKER_SUCCESS';
export const CRYPTO_TICKER_FAILURE = 'CRYPTO_TICKER_FAILURE';


export function cryptoTickerRequest() {
    return {
        type: CRYPTO_TICKER_REQUEST
    }
}

export function cryptoTickerSuccess(data) {
    return {
        type: CRYPTO_TICKER_SUCCESS,
        payload: data
    }
}

export function cryptoTickerFailure(error) {
    return {
        type: CRYPTO_TICKER_FAILURE,
        payload: error
    }
}

export function fetchCryptoTicker() {
    return function (dispatch) {
        dispatch(cryptoTickerRequest());
        return axios({
            method: 'get',
            url: `${ROOT_URL}/global/`,
        }).then(response => {
            dispatch(cryptoTickerSuccess(response.data))
        }).catch(error => {
            dispatch(cryptoTickerFailure(error))
        });
    }
}