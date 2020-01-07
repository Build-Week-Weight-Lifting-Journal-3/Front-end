// import * as types from '../types';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = (credentials) => dispatch => {
    console.log(credentials);
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
    .post('auth/login', credentials)
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        // history.push('/journal');
    })
    .catch(err => {
        // console.log(err);
        dispatch({ type: LOGIN_FAIL, payload: err })
    })
}