import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/actions";

const userLogin = {
  userId: 0,
  loginLoading: false,
  loggedIn: false,
  loginError: "",
};

export function loginReducer (state = userLogin, action) {
  switch(action.type){
    case LOGIN_START:
      return{
        ...state,
        loginLoading: true
      };

    case LOGIN_SUCCESS:
      return{
        ...state,
        loginLoading: false,
        loggedIn: true,
        userId: action.payload
      };

    case LOGIN_FAILURE:
      return{
        ...state,
        loginLoading: false,
        loginError: action.payload
      };
      
    default: 
      return state;
  }
};