import * as clubsTypes from '../../types/clubsReducerTypes';
import * as actionTypes from './actionTypes';

// Initial state ================================================================
const initialState: clubsTypes.ClubsState = {
  clubs: [],
  pages: 0,
  currentPage: 0,
  favoritesFilter: false,
};

// REDUCER ======================================================================
const clubsReducer = (
  state: clubsTypes.ClubsState = initialState,
  action: clubsTypes.ClubsReducerActions
): clubsTypes.ClubsState => {
  switch (action.type) {
    case actionTypes.START_CLUBS_FETCH:
      return state;
    case actionTypes.SET_CLUBS_DATA:
      return { ...state, clubs: action.payload as clubsTypes.ClubData[] };
    case actionTypes.SET_TOTAL_PAGES:
      return { ...state, pages: action.payload as number };
    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload as number };
    case actionTypes.SET_FAVORITES_FILTER:
      return { ...state, favoritesFilter: action.payload as boolean };
    case actionTypes.SEARCH_SPECIFIC_CLUB:
      return { ...state, currentPage: 0 };
    case actionTypes.SET_CLUB_FAVORITE:
      return state;
    default:
      return state;
  }
};

export default clubsReducer;
