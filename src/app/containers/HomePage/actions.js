/**
 * Created by vaibhav on 9/5/18
 */
import axios from 'axios';
import {ROOT_URL} from "../../../core/config";

export const CRYPTO_LIST_REQUEST = 'CRYPTO_LIST_REQUEST';
export const CRYPTO_LIST_SUCCESS = 'CRYPTO_LIST_SUCCESS';
export const CRYPTO_LIST_FAILURE = 'CRYPTO_LIST_FAILURE';


export function cryptoListRequest() {
    return {
        type: CRYPTO_LIST_REQUEST
    }
}

export function cryptoListSuccess(data) {
    return {
        type: CRYPTO_LIST_SUCCESS,
        payload: data
    }
}

export function cryptoListFailure(error) {
    return {
        type: CRYPTO_LIST_FAILURE,
        payload: error
    }
}

export function fetchCryptoList() {
    return function (dispatch) {
        dispatch(cryptoListRequest());
        return axios({
            method: 'get',
            url: `${ROOT_URL}/ticker/?limit=0`,
        }).then(response => {
            dispatch(cryptoListSuccess(response.data))
        }).catch(error => {
            dispatch(cryptoListFailure(error))
        });
    }
}