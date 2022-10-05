import * as UITypes from '../../types/uiReducerTypes'; // UI interfaces
import * as actionTypes from './actionTypes'; // Action types

// Initial state =============================================================
const initialState: UITypes.UIState = {
  errorMessage: '',
  loading: false,
};

// REDUCER ===================================================================
const uiReducer = (
  state: UITypes.UIState = initialState,
  action: UITypes.UIActions
): UITypes.UIState => {
  switch (action.type) {
    case actionTypes.SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload as string };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload as boolean };
    default:
      return state;
  }
};

export default uiReducer;
