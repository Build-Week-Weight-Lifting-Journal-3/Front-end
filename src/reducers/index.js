// import * as types from '../types';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_JOURNAL_START,
    GET_JOURNAL_SUCCESS,
    GET_JOURNAL_FAIL,
    ADD_JOURNAL_START,
    ADD_JOURNAL_SUCCESS,
    ADD_JOURNAL_FAIL,
    UPDATE_JOURNAL_START,
    UPDATE_JOURNAL_SUCCESS,
    UPDATE_JOURNAL_FAIL
} from '../actions';

const initialState = {
    journals: [
        {
            name: '',
            date: ''
        }
    ],
    fetchingData: false,
    isLoggedIn: false,
    isUpdating: false,
    isPosting: false,
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
        case ADD_JOURNAL_START:
            return {
                ...state,
                isPosting: true,
                error: null
            }
        case ADD_JOURNAL_SUCCESS:
            return {
                ...state,
                journals: action.payload,
                isPosting: false,
                error: null
            }
        case ADD_JOURNAL_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        case UPDATE_JOURNAL_START:
            return {
                ...state,
                isUpdating: false
            }
        case UPDATE_JOURNAL_SUCCESS:
            return {
                ...state,
                isUpdating: true
            }
        case UPDATE_JOURNAL_FAIL:
            return {
                ...state,
                isUpdating: false
            }

        default: return state;
    }
}