// import * as types from '../types';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const GET_JOURNAL_START = 'GET_JOURNAL_START';
export const GET_JOURNAL_SUCCESS = 'GET_JOURNAL_SUCCESS';
export const GET_JOURNAL_FAIL = 'GET_JOURNAL_FAIL';

export const ADD_JOURNAL_START = 'ADD_JOURNAL_START';
export const ADD_JOURNAL_SUCCESS = 'ADD_JOURNAL_SUCCESS';
export const ADD_JOURNAL_FAIL = 'ADD_JOURNAL_FAIL';

export const UPDATE_JOURNAL_START = 'UPDATE_JOURNAL_START';
export const UPDATE_JOURNAL_SUCCESS = 'UPDATE_JOURNAL_SUCCESS';
export const UPDATE_JOURNAL_FAIL = 'UPDATE_JOURNAL_FAIL';

export const DELETE_JOURNAL_START = 'DELETE_JOURNAL_START';
export const DELETE_JOURNAL_SUCCESS = 'DELETE_JOURNAL_SUCCESS';
export const DELETE_JOURNAL_FAIL = 'DELETE_JOURNAL_FAIL';

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
        // console.log(res);
        dispatch({ type: GET_JOURNAL_SUCCESS, payload: res.data });
    })
    .catch(err => {
        // console.log(err);
        dispatch({ type: GET_JOURNAL_FAIL, payload: err })
    })
}

export const addJournal = (data) => dispatch => {
    dispatch ({ type: ADD_JOURNAL_START });
    return axiosWithAuth()
    .post('/journals', data)
    .then(res => {
        console.log(res);
        dispatch({ type: ADD_JOURNAL_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: ADD_JOURNAL_FAIL, payload: err });
    })
}

export const updateJournal = (id, editValue) => dispatch => {
    console.log(editValue);
    dispatch({type: UPDATE_JOURNAL_START});
    return axiosWithAuth()
    .put(`/journals/${id}`, editValue)
    .then(res => {
        console.log(res);
        dispatch({type: UPDATE_JOURNAL_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: UPDATE_JOURNAL_FAIL, payload: err});
    })
}

export const deleteJournal = (id) => dispatch => {
    dispatch({ type: DELETE_JOURNAL_START })
    return axiosWithAuth()
    .delete(`/journals/${id}`)
    .then(res => {
        console.log(res);
        dispatch({ type: DELETE_JOURNAL_SUCCESS, payload: id});
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_JOURNAL_FAIL, payload: err });
    })
}