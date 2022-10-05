import { useDispatch, useSelector } from 'react-redux';
import { MainStore } from '../store/store';
import { setErrorMessage } from '../store/UI/ui.actions';
import * as UITypes from '../types/uiReducerTypes';

const useUIStore = () => {
  // Hooks ========================================================================
  const dispatch = useDispatch();
  const { errorMessage, loading } = useSelector(
    (state: MainStore): UITypes.UIState => state.ui
  );

  // Set error message ============================================================
  const dispatchSetErrorMessage = (message: string) =>
    dispatch(setErrorMessage(message));

  return {
    errorMessage,
    loading,
    dispatchSetErrorMessage,
  };
};

export default useUIStore;
