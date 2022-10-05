import axios, { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserData } from '../../types/authReducerTypes';
import axiosInstance from '../../utils/axiosInstance';
import { SET_USER_DATA } from '../auth/actionTypes';
import { setSignInSuccess } from '../auth/auth.actions';
import { setErrorMessage } from '../UI/ui.actions';

// User authorization ===================================================================
function* signIn({ type, payload }: { type: AnyAction; payload: UserData }) {
  try {
    const { status, data }: AxiosResponse = yield call(
      axiosInstance.post,
      '/login',
      payload
    );
    if (status === 200) {
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      localStorage.setItem('authToken', JSON.stringify(data));
      localStorage.setItem('session', 'signedIn');
      yield put(setSignInSuccess(true));
    }
  } catch ({ code }) {
    if (code === 'ERR_BAD_REQUEST') {
      yield put(setErrorMessage('Wrong email or password'));
    }
  }
}
export default function* authSaga() {
  yield takeLatest(SET_USER_DATA, signIn);
}
