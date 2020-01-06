import * as types from '../types';

const initialState = {
    fetchingData: false,
    isLoggedIn: false,
    error: '',
    token: '',
    id: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
            return {
                ...state,
                fetchingData: true,
                token: action.payload,
                id: action.id
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                isLoggedIn: true
            }
        case types.REGISTER_FAIL:
            return {
                error: action.payload
            }
        case types.LOGIN_START:
            return {
                ...state,
                fetchingData: true,
                token: action.payload,
                id: action.id
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                isLoggedIn: true,
                token: action.payload
            }
        case types.LOGIN_FAIL:
            return {
                error: action.payload
            }

        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                data: action.payload.response,
            }
        case types.GET_DATA_FAIL:
            return {
                error: action.payload
            }

        default: return state;
    }
}