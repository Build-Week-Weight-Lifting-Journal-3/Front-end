import {
    NEW_TASK_START,
    NEW_TASK_SUCCESS,
    NEW_TASK_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    EDIT_START,
    EDIT_SUCCESS,
    EDIT_FAILURE,
    DELETE_START,
    DELETE_SUCCESS
  } from "../actions/actions";
  
  const initialState = {
    isFetching: false,
    isCreatingEvent: false,
    hasCreatedEvent: false,
    exerciseList: [],
    isUpdating: false,
    isDeleted: false
  };
  
  export function exerciseReducer(state = initialState, action) {
    switch (action.type) {
      case NEW_TASK_START:
        return {
          ...state,
          isFetching: true,
          hasCreatedEvent: false,
          isCreatingEvent: true
        };
  
      case NEW_TASK_SUCCESS:
        return {
          ...state,
          isFetching: false,
          hasCreatedEvent: true,
          isCreatingEvent: false
        };
  
      case NEW_TASK_ERROR:
        return {
          ...state,
          isFetching: false,
          hasCreatedEvent: false,
          isCreatingEvent: false
        };
  
      case FETCH_START:
        return {
          ...state
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          exerciseList: action.payload
        };
      case FETCH_FAILURE:
        return {
          ...state
        };
      case EDIT_START:
        return {
          ...state,
          isUpdating: false
        };
      case EDIT_SUCCESS:
        return {
          ...state,
          isUpdating: true
        };
      case EDIT_FAILURE:
        return {
          ...state,
          isUpdating: false
        };
      case DELETE_START:
        return {
          ...state,
          isDeleted: false
        };
      case DELETE_SUCCESS:
        return {
          ...state,
          isDeleted: true
        };
  
      default:
        return state;
    }
  }