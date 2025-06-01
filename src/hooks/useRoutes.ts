import { useQuery } from '@tanstack/react-query';
import { routeService } from '../services/routeService';
import type { RouteConfig } from '../types/routes';

export const useRoutes = () => {
  const { data: routeData, isLoading, error } = useQuery({
    queryKey: ['routes'],
    queryFn: routeService.getRoutes,
    gcTime: 30 * 60 * 1000, // 30 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    routes: routeData?.routes ?? [],
    isLoading,
    error,
  };
}; 