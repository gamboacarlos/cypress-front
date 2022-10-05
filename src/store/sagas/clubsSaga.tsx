import { call, put, takeLatest, select } from 'redux-saga/effects';
import { setClubsData, setTotalPages } from '../clubs/clubs.actions';
import { setErrorMessage, setLoading } from '../UI/ui.actions';
import confirmationToast from '../../utils/confirmationToast';
import * as clubsTypes from '../../types/clubsReducerTypes';
import axiosInstance from '../../utils/axiosInstance';
import { favorites, currentPage } from './selectors';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import {
  SEARCH_SPECIFIC_CLUB,
  SET_CLUB_FAVORITE,
  SET_CURRENT_PAGE,
  SET_FAVORITES_FILTER,
  START_CLUBS_FETCH,
} from '../clubs/actionTypes';

// Fetch clubs with pagination and favorites filter ====================================
function* fetchClubs() {
  try {
    yield put(setErrorMessage(''));
    yield put(setLoading(true));
    const favorite: boolean = yield select(favorites); // Get favoritesFilter state
    const page: number = yield select(currentPage); // Get currentPage state
    const { data } = yield call(
      axiosInstance.get,
      `/api/clubs?offset=${page}&limit=6${
        favorite ? `&favorite=${favorite}` : ''
      }`
    );
    yield put(setClubsData(data.results)); // Set all clubs available to clubs state
    yield put(setTotalPages(data.total)); // Set the total number of pages available in pages state
    yield put(setLoading(false));
    if (data.results.length === 0) {
      yield put(setErrorMessage('No clubs to show'));
    }
  } catch (err) {
    console.error(err);
  }
}

// Search a specific club =============================================================
function* fetchSpecificClub({
  type,
  payload,
}: {
  type: AnyAction;
  payload: string;
}) {
  try {
    yield put(setErrorMessage(''));
    yield put(setLoading(true));
    const { data } = yield call(
      axiosInstance.get,
      `/api/clubs?offset=0&limit=6&name_like=${payload}`
    );
    yield put(setClubsData(data.results)); // Set all clubs available to clubs state
    yield put(setLoading(false));
    if (data.results.length === 0) {
      yield put(setErrorMessage('No results'));
    }
  } catch (error) {
    yield console.error(error);
  }
}

// Set club favorite =================================================================
function* setClubFavorite({
  type,
  payload,
}: {
  type: AnyAction;
  payload: clubsTypes.SetFavoriteData;
}) {
  try {
    yield put(setErrorMessage(''));
    const { id, favorite } = payload;
    const { data, status }: AxiosResponse = yield call(
      axiosInstance.patch,
      `/api/clubs/${id}`,
      { favorite }
    );
    if (status === 200) {
      yield confirmationToast(data);
    }
  } catch (error) {
    yield console.error(error);
  }
}

// Export all sagas ===================================================================
export default function* clubsSaga() {
  yield takeLatest(
    [START_CLUBS_FETCH, SET_FAVORITES_FILTER, SET_CURRENT_PAGE],
    fetchClubs
  );
  yield takeLatest(SEARCH_SPECIFIC_CLUB, fetchSpecificClub);
  yield takeLatest(SET_CLUB_FAVORITE, setClubFavorite);
}
