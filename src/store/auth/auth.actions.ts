import * as authTypes from '../../types/authReducerTypes';
import * as actionTypes from './actionTypes';

// Set user credentials ========================================================
export const setUserData = (
  data: authTypes.UserData
): authTypes.ActionSetUserData => {
  return {
    type: actionTypes.SET_USER_DATA,
    payload: data,
  };
};
export const setSignInSuccess = (
  signIn: boolean
): authTypes.ActionSetSignInSuccess => {
  return {
    type: actionTypes.SET_SIGN_IN_SUCCESS,
    payload: signIn,
  };
};
