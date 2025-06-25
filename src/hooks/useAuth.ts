import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../redux/store';
import { login, logout, clearError } from '../redux/slices/authSlice';
import { ROUTES } from '../routes';
import { LoginViewModel } from '@/viewmodels/auth/LoginViewModel';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = async (credentials:LoginViewModel) => {
    try {
      await dispatch(login(credentials)).unwrap();
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      // Error is handled by Redux
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      // Error is handled by Redux
    }
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login: handleLogin,
    logout: handleLogout,
    clearError: handleClearError,
  };
}; 