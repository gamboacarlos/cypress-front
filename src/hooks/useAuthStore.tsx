import { useDispatch, useSelector } from 'react-redux';
import { MainStore } from '../store/store';
import { setSignInSuccess, setUserData } from '../store/auth/auth.actions';
import * as authTypes from '../types/authReducerTypes';

const useAuthStore = () => {
  // Hooks ========================================================================
  const dispatch = useDispatch();
  const { userData, signInSuccess } = useSelector(
    (state: MainStore): authTypes.AuthState => state.auth
  );
  // Set user data ================================================================
  const dispatchSetUserData = (data: authTypes.UserData) =>
    dispatch(setUserData(data));

  // Set sign in success ==========================================================
  const dispatchSetSigInSuccess = (signIn: boolean) =>
    dispatch(setSignInSuccess(signIn));

  return {
    userData,
    signInSuccess,
    dispatchSetUserData,
    dispatchSetSigInSuccess,
  };
};

export default useAuthStore;
