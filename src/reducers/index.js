// import * as types from '../types';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions';

const initialState = {
    fetchingData: false,
    isLoggedIn: false,
    error: '',
    // token: '',
    id: ''
    // firstName: '',
    // lastName: '',
    // email: '',
    // password: ''
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
                // token: action.payload,
                // id: action.id
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                isLoggedIn: true,
                id: action.payload
            }
        case LOGIN_FAIL:
            return {
                error: action.payload
            }
        // case GET_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         fetchingData: false,
        //         data: action.payload.response,
        //     }
        // case GET_DATA_FAIL:
        //     return {
        //         error: action.payload
        //     }

        default: return state;
    }
}