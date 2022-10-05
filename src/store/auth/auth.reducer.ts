import * as authTypes from '../../types/authReducerTypes';
import * as actionTypes from './actionTypes';

// Initial state ===============================================================
const initialState: authTypes.AuthState = {
  userData: null,
  signInSuccess: false,
};

// REDUCER =====================================================================
const authReducer = (
  state: authTypes.AuthState = initialState,
  action: authTypes.AuthActions
): authTypes.AuthState => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return { ...state, userData: action.payload as authTypes.UserData };
    case actionTypes.SET_SIGN_IN_SUCCESS:
      return { ...state, signInSuccess: action.payload as boolean };
    default:
      return state;
  }
};

export default authReducer;
