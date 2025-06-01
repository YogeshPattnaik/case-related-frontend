import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { logout } from '../redux/slices/authSlice';
import { ROUTES } from '../routes';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const user = useSelector((state: RootState) => state.auth.user);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      queryClient.clear();
      dispatch(logout());
      navigate(ROUTES.LOGIN);
    },
  });

  return {
    user,
    logout: logoutMutation.mutate,
  };
} 