import { FC } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import ClubsView from '../views/ClubsView';
import HomeView from '../views/HomeView';
import ProtectedRoute from './ProtectedRoute';

const MainRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/clubs"
          element={
            <ProtectedRoute>
              <ClubsView />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
