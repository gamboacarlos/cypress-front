// Data interfaces ======================================================
export interface ClubData {
  id: string;
  name: string;
  foundationDate: string;
  avatar: string;
  favorite: boolean;
}
export interface SetFavoriteData {
  id: string;
  favorite: boolean;
}

// State interfaces =====================================================
export interface ClubsState {
  clubs: ClubData[];
  pages: number;
  currentPage: number;
  favoritesFilter: boolean;
}

// Actions interfaces ===================================================
export interface ActionGetAllClubs {
  type: string;
  payload: ClubData[];
}
export interface ActionStartClubsFetch {
  type: string;
  payload: null;
}
export interface ActionSetCurrentPage {
  type: string;
  payload: number;
}
export interface ActionSetTotalPages {
  type: string;
  payload: number;
}
export interface ActionSetFavoritesFilter {
  type: string;
  payload: boolean;
}
export interface ActionSearchSpecificClub {
  type: string;
  payload: string;
}
export interface ActionSetClubFavorite {
  type: string;
  payload: SetFavoriteData;
}

// All actions ==========================================================
export type ClubsReducerActions =
  | ActionStartClubsFetch
  | ActionGetAllClubs
  | ActionSetCurrentPage
  | ActionSetTotalPages
  | ActionSetFavoritesFilter
  | ActionSearchSpecificClub
  | ActionSetClubFavorite;
