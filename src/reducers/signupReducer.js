import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR, 
  } from "../actions/actions";
  
  const initialState = {
    payload: {},
    isLoggedIn: false
  };
  
  export function authReducer(state = initialState, action) {
    switch (action.type) {
      case SIGNUP_START:
        return {
          ...state,
          isLoggedIn: false
        };
  
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isLoggedIn: true
        };
  
      case SIGNUP_ERROR:
        return {
          ...state,
          isLoggedIn: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  }