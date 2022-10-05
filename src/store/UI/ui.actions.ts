import * as UITypes from '../../types/uiReducerTypes';
import * as actionTypes from './actionTypes';

// Set error message ======================================================
export const setErrorMessage = (
  message: string
): UITypes.ActionSetErrorMessage => {
  return {
    type: actionTypes.SET_ERROR_MESSAGE,
    payload: message,
  };
};

// Set loading ============================================================
export const setLoading = (loading: boolean): UITypes.ActionSetLoading => {
  return {
    type: actionTypes.SET_LOADING,
    payload: loading,
  };
};
