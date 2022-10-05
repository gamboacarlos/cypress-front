import * as clubsTypes from '../../types/clubsReducerTypes';
import * as actionTypes from './actionTypes';

// Start clubs data fetch ====================================================
export const startClubsFetch = (): clubsTypes.ActionStartClubsFetch => {
  return {
    type: actionTypes.START_CLUBS_FETCH,
    payload: null,
  };
};

// Set all clubs data ========================================================
export const setClubsData = (data: clubsTypes.ClubData[]) => {
  return {
    type: actionTypes.SET_CLUBS_DATA,
    payload: data,
  };
};

// Set favorites filter ======================================================
export const setFavoritesFilter = (
  filter: boolean
): clubsTypes.ActionSetFavoritesFilter => {
  return {
    type: actionTypes.SET_FAVORITES_FILTER,
    payload: filter,
  };
};

// Set current page ==========================================================
export const setCurrentPage = (
  page: number
): clubsTypes.ActionSetCurrentPage => {
  return {
    type: actionTypes.SET_CURRENT_PAGE,
    payload: page,
  };
};

// Set total pages ===========================================================
export const setTotalPages = (
  page: number
): clubsTypes.ActionSetCurrentPage => {
  return {
    type: actionTypes.SET_TOTAL_PAGES,
    payload: page,
  };
};

// Search specific club ======================================================
export const searchSpecificClub = (
  query: string
): clubsTypes.ActionSearchSpecificClub => {
  return {
    type: actionTypes.SEARCH_SPECIFIC_CLUB,
    payload: query,
  };
};

// Set club as favorite ======================================================
export const setClubFavorite = (
  favorite: clubsTypes.SetFavoriteData
): clubsTypes.ActionSetClubFavorite => {
  return {
    type: actionTypes.SET_CLUB_FAVORITE,
    payload: favorite,
  };
};
