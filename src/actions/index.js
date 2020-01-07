// import * as types from '../types';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const GET_JOURNAL_START = 'GET_JOURNAL_START';
export const GET_JOURNAL_SUCCESS = 'GET_JOURNAL_SUCCESS';
export const GET_JOURNAL_FAIL = 'GET_JOURNAL_FAIL';

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

export const getJournals = () => dispatch => {
    // console.log();
    dispatch({ type: GET_JOURNAL_START });
    return axiosWithAuth()
    .get('/journals')
    .then(res => {
        console.log(res);
        dispatch({ type: GET_JOURNAL_SUCCESS, payload: res.data });
    })
    .catch(err => {
        // console.log(err);
        dispatch({ type: GET_JOURNAL_FAIL, payload: err })
    })
}