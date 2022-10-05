import { useDispatch, useSelector } from 'react-redux';
import { MainStore } from '../store/store';
import * as clubsTypes from '../types/clubsReducerTypes';
import {
  setClubsData,
  searchSpecificClub,
  setClubFavorite,
  setCurrentPage,
  setFavoritesFilter,
  setTotalPages,
  startClubsFetch,
} from '../store/clubs/clubs.actions';

const useClubsStore = () => {
  // Hooks ======================================================================
  const dispatch = useDispatch();
  const { clubs, pages, currentPage } = useSelector(
    (state: MainStore): clubsTypes.ClubsState => state.clubs
  );

  // Fetch clubs data ===========================================================
  const dispatchStartClubsFetch = () => dispatch(startClubsFetch());

  // Set clubs data in the clubs state ==========================================
  const dispatchSetClubsData = (clubs: clubsTypes.ClubData[]) =>
    dispatch(setClubsData(clubs));

  // Set clubs total pages ======================================================
  const dispatchSetTotalPages = (pages: number) =>
    dispatch(setTotalPages(pages));

  // Set current page ===========================================================
  const dispatchSetCurrentPage = (page: number) =>
    dispatch(setCurrentPage(page));

  // Set favorites filter =======================================================
  const dispatchSetFavoritesFilter = (filter: boolean) =>
    dispatch(setFavoritesFilter(filter));

  // Club search ================================================================
  const dispatchSearchSpecificClub = (query: string) =>
    dispatch(searchSpecificClub(query));

  // Set club as favorite =======================================================
  const dispatchSetClubFavorite = (favorite: clubsTypes.SetFavoriteData) =>
    dispatch(setClubFavorite(favorite));

  return {
    clubs,
    pages,
    currentPage,
    dispatchStartClubsFetch,
    dispatchSetClubsData,
    dispatchSetTotalPages,
    dispatchSetFavoritesFilter,
    dispatchSetCurrentPage,
    dispatchSearchSpecificClub,
    dispatchSetClubFavorite,
  };
};

export default useClubsStore;
