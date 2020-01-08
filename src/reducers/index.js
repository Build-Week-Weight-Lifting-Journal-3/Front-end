// import * as types from '../types';
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_JOURNAL_START,
    GET_JOURNAL_SUCCESS,
    GET_JOURNAL_FAIL,
    ADD_JOURNAL_START,
    ADD_JOURNAL_SUCCESS,
    ADD_JOURNAL_FAIL,
    EDIT_JOURNAL_START,
    EDIT_JOURNAL_SUCCESS,
    EDIT_JOURNAL_FAIL,
    DELETE_JOURNAL_START,
    DELETE_JOURNAL_SUCCESS,
    DELETE_JOURNAL_FAIL,
    GET_EXERCISE_START,
    GET_EXERCISE_SUCCESS,
    GET_EXERCISE_FAIL,
    ADD_EXERCISE_START,
    ADD_EXERCISE_SUCCESS,
    ADD_EXERCISE_FAIL,
    UPDATE_EXERCISE_START,
    UPDATE_EXERCISE_SUCCESS,
    UPDATE_EXERCISE_FAIL,
} from '../actions';

const initialState = {
    journals: {
        name: '',
        date: ''
    },
    exercises: [
        {
            name: '',
            region: '',
            weight: '',
            reps: '',
            sets: ''
        }
    ],
    fetchingData: false,
    isLoggedIn: false,
    isUpdating: false,
    isPosting: false,
    isDeleting: false,
    error: '',
    id: '',
    data: [],
    payload: {}
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
        case SIGNUP_START:
            return {
                ...state,
                isPosting: false
            };

        case SIGNUP_SUCCESS:
            return {
                ...state,
                isPosting: true
            };

        case SIGNUP_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            };
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
                data: [...state.data, action.payload],
                isPosting: false,
                error: null
            }
        case ADD_JOURNAL_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        case EDIT_JOURNAL_START:
            return {
                ...state,
                isUpdating: false
            }
        case EDIT_JOURNAL_SUCCESS:
            return {
                ...state,
                isUpdating: true,
                data: action.payload
                // data: state.data.map(entry => {
                //     if (entry.id === action.payload.id)
                //     {
                //         return action.payload
                //     }
                //     return entry
                // })
            }
        case EDIT_JOURNAL_FAIL:
            return {
                ...state,
                isUpdating: false
            }
        case DELETE_JOURNAL_START:
            return {
                ...state,
                isDeleting: false
            }
        case DELETE_JOURNAL_SUCCESS:
            return {
                ...state,
                isDeleting: true,
                journals: action.payload
            }
        case DELETE_JOURNAL_FAIL:
            return {
                ...state,
                isDeleting: false
            }
        case GET_EXERCISE_START:
            return {
                ...state,
                fetchingData: true
            }
        case GET_EXERCISE_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                data: action.payload
            }
        case GET_EXERCISE_FAIL:
            return {
                error: action.payload
            }
        case ADD_EXERCISE_START:
            return {
                ...state,
                isPosting: true,
                error: null
            }
        case ADD_EXERCISE_SUCCESS:
            return {
                ...state,
                journals: action.payload,
                isPosting: false,
                error: null
            }
        case ADD_EXERCISE_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        case UPDATE_EXERCISE_START:
            return {
                ...state,
                isUpdating: false
            }
        case UPDATE_EXERCISE_SUCCESS:
            return {
                ...state,
                isUpdating: true
            }
        case UPDATE_EXERCISE_FAIL:
            return {
                ...state,
                isUpdating: false
            }

        default: return state;
    }
}