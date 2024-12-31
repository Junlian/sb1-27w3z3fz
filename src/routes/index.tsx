import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import MainContainer from '../components/Layout/MainContainer';
import SearchSection from '../components/Layout/SearchSection';
import AssistantSection from '../components/Layout/AssistantSection';
import AuthGuard from '../components/auth/AuthGuard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/"
        element={
          <AuthGuard>
            <MainContainer>
              <SearchSection 
                onSearch={async (query, filters) => {
                  console.log('Search:', query, filters);
                  // TODO: Implement search functionality
                }} 
              />
              <AssistantSection />
            </MainContainer>
          </AuthGuard>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;