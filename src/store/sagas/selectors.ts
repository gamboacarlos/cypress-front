import { MainStore } from '../store';

// State selectors ==============================================================
export const favorites = (state: MainStore) => state.clubs.favoritesFilter;
export const currentPage = (state: MainStore) => state.clubs.currentPage;
export const errorMessage = (state: MainStore) => state.ui.errorMessage;
export const clubsState = (state: MainStore) => state.clubs.clubs;
