// import * as types from '../types';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_JOURNAL_START,
    GET_JOURNAL_SUCCESS,
    GET_JOURNAL_FAIL,
} from '../actions';

const initialState = {
    fetchingData: false,
    isLoggedIn: false,
    error: '',
    id: '',
    data: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case REGISTER_START:
        //     return {
        //         ...state,
        //         fetchingData: true,
        //         token: action.payload,
        //         id: action.id
        //     }
        // case REGISTER_SUCCESS:
        //     return {
        //         ...state,
        //         fetchingData: false,
        //         isLoggedIn: true
        //     }
        // case REGISTER_FAIL:
        //     return {
        //         error: action.payload
        //     }
        case LOGIN_START:
            return {
                ...state,
                fetchingData: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                isLoggedIn: true,
                id: action.payload,
                error: ''
            }
        case LOGIN_FAIL:
            return {
                error: action.payload
            }
        case GET_JOURNAL_START:
            return {
                ...state,
                fetchingData: true
            }
        case GET_JOURNAL_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                data: action.payload
            }
        case GET_JOURNAL_FAIL:
            return {
                error: action.payload
            }

        default: return state;
    }
}