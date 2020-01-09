// import * as types from '../types';
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_JOURNAL_START,
    GET_JOURNAL_SUCCESS,
    GET_JOURNAL_FAIL,
    ADD_JOURNAL_START,
    ADD_JOURNAL_SUCCESS,
    ADD_JOURNAL_FAIL,
    EDIT_JOURNAL_START,
    EDIT_JOURNAL_SUCCESS,
    EDIT_JOURNAL_FAIL,
    EDIT_FIELDS,
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
    DELETE_EXERCISE_START,
    DELETE_EXERCISE_SUCCESS,
    DELETE_EXERCISE_FAIL,
    EDIT_EXERCISE_FIELDS,
} from '../actions';

const initialState = {
    exercises: [
        {
            name: '',
            region: ''
        }
    ],
    fetchingData: false,
    isLoggedIn: false,
    isUpdating: false,
    isEditing: false,
    isPosting: false,
    isDeleting: false,
    error: '',
    id: '',
    JournalId: '',
    ExerciseId: '',
    data: [],
    payload: {}
}

export const reducer = (state = initialState, action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
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
        case LOGOUT:
            return {
                isLoggedIn: false
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
                ...state,
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
                // id: action.payload,
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
                data: state.data.map(item => {
                    if (item.id === action.payload.id)
                    {
                     return action.payload   
                    }
                    return item 
                }),
                isUpdating: true,
                isEditing: false,
                error: null
            }
        case EDIT_JOURNAL_FAIL:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
        case EDIT_FIELDS:
            return {
                ...state,
                isEditing: true
            }
        case EDIT_FIELDS:
            return {
                ...state,
                isEditing: true
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
                data: state.data.filter(i => action.payload !== i.id)
            }
        case DELETE_JOURNAL_FAIL:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
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
                ...state,
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
                data: [...state.data, action.payload],
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
                data: state.data.map(item => {
                    if (item.id === action.payload.id)
                    {
                     return action.payload   
                    }
                    return item 
                }),
                isUpdating: true,
                isEditing: false,
                error: null
            }
        case UPDATE_EXERCISE_FAIL:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
        case DELETE_EXERCISE_START:
            return {
                ...state,
                isDeleting: false
            }
        case DELETE_EXERCISE_SUCCESS:
            return {
                ...state,
                isDeleting: true,
                data: state.data.filter(i => action.payload !== i.id)
            }
        case DELETE_EXERCISE_FAIL:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            }
        case EDIT_EXERCISE_FIELDS:
            return {
                ...state,
                isEditing: true
            }

        default: return state;
    }
}