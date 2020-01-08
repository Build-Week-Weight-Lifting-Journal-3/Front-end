// import * as types from '../types';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { history } from '../index';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const GET_JOURNAL_START = 'GET_JOURNAL_START';
export const GET_JOURNAL_SUCCESS = 'GET_JOURNAL_SUCCESS';
export const GET_JOURNAL_FAIL = 'GET_JOURNAL_FAIL';

export const ADD_JOURNAL_START = 'ADD_JOURNAL_START';
export const ADD_JOURNAL_SUCCESS = 'ADD_JOURNAL_SUCCESS';
export const ADD_JOURNAL_FAIL = 'ADD_JOURNAL_FAIL';

export const EDIT_JOURNAL_START = 'EDIT_JOURNAL_START';
export const EDIT_JOURNAL_SUCCESS = 'EDIT_JOURNAL_SUCCESS';
export const EDIT_JOURNAL_FAIL = 'EDIT_JOURNAL_FAIL';

export const DELETE_JOURNAL_START = 'DELETE_JOURNAL_START';
export const DELETE_JOURNAL_SUCCESS = 'DELETE_JOURNAL_SUCCESS';
export const DELETE_JOURNAL_FAIL = 'DELETE_JOURNAL_FAIL';

export const GET_EXERCISE_START = 'GET_EXERCISE_START';
export const GET_EXERCISE_SUCCESS = 'GET_EXERCISE_SUCCESS';
export const GET_EXERCISE_FAIL = 'GET_EXERCISE_FAIL';

export const ADD_EXERCISE_START = 'ADD_EXERCISE_START';
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAIL = 'ADD_EXERCISE_FAIL';

export const UPDATE_EXERCISE_START = 'UPDATE_EXERCISE_START';
export const UPDATE_EXERCISE_SUCCESS = 'UPDATE_EXERCISE_SUCCESS';
export const UPDATE_EXERCISE_FAIL = 'UPDATE_EXERCISE_FAIL';

export const DELETE_EXERCISE_START = 'DELETE_EXERCISE_START';
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS';
export const DELETE_EXERCISE_FAIL = 'DELETE_EXERCISE_FAIL';

export const register = payload => dispatch => {
    console.log(payload, "register");
    dispatch({ type: SIGNUP_START });
    axiosWithAuth()
      .post("/auth/register", payload)
      .then(res => {
        console.log(res.data);
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        window.localStorage.setItem("token", res.data.token);
        history.push("/");
      })
      .catch(err => {
        console.log(err, "Wouldn't it be nice if I worked?");
        dispatch({ type: SIGNUP_FAIL, payload: err });
      });
  };

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

export const editJournal = (id) => dispatch => {
    console.log('edit item', id);
    dispatch({type: EDIT_JOURNAL_START});
    return axiosWithAuth()
    .put(`/journals/${id.id}`, id)
    .then(res => {
        console.log(res);
        dispatch({type: EDIT_JOURNAL_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: EDIT_JOURNAL_FAIL, payload: err});
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

export const getExercises = () => dispatch => {
    // console.log();
    dispatch({ type: GET_EXERCISE_START });
    return axiosWithAuth()
    .get('/exercises')
    .then(res => {
        console.log(res);
        dispatch({ type: GET_EXERCISE_SUCCESS, payload: res.data });
    })
    .catch(err => {
        // console.log(err);
        dispatch({ type: GET_EXERCISE_FAIL, payload: err })
    })
}

export const addExercise = (data) => dispatch => {
    dispatch ({ type: ADD_EXERCISE_START });
    return axiosWithAuth()
    .post('/exercises', data)
    .then(res => {
        console.log(res);
        dispatch({ type: ADD_EXERCISE_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: ADD_EXERCISE_FAIL, payload: err });
    })
}

export const updateExercise = (id, exercise) => dispatch => {
    console.log(exercise);
    dispatch({type: UPDATE_EXERCISE_START});
    return axiosWithAuth()
    .put(`/exercises/${id}`, exercise)
    .then(res => {
        console.log(res);
        dispatch({type: UPDATE_EXERCISE_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: UPDATE_EXERCISE_FAIL, payload: err});
    })
}

export const deleteExercise = (id) => dispatch => {
    dispatch({ type: DELETE_EXERCISE_START })
    return axiosWithAuth()
    .delete(`/exercises/${id}`, {headers: {Authorization:localStorage.getItem('token')}})
    .then(res => {
        console.log(res);
        dispatch({ type: DELETE_EXERCISE_SUCCESS, payload: id});
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_EXERCISE_FAIL, payload: err });
    })
}