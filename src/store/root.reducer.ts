import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import clubsReducer from './clubs/clubs.reducer';
import uiReducer from './UI/ui.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  clubs: clubsReducer,
  ui: uiReducer,
});

export default rootReducer;
