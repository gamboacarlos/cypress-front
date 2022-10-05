import { all } from 'redux-saga/effects';
import clubsSaga from './clubsSaga';
import authSaga from './authSaga';

export default function* mainSaga() {
  yield all([authSaga(), clubsSaga()]);
}
