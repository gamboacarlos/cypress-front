import { ChangeEvent } from 'react';
import { RouteProps } from 'react-router-dom';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ClubData } from './clubsReducerTypes';

// useField custom hook interface ===================================================
export interface UseFieldHook {
  type: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  reset: () => void;
}

// Skeleton component props interface ===============================================
export interface SkeletonProps {
  loading: boolean;
  message: string;
}

// Clubs list props interface ===============================================
export interface ClubsListProps {
  clubs: ClubData[];
}

// Protected routes props interface =================================================
export interface ProtectedRouteProps extends RouteProps {
  children: ReactJSXElement;
}
