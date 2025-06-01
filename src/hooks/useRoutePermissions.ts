import { useMemo } from 'react';
import { useAuth } from './useAuth';
import { ROUTE_PERMISSIONS } from '../types/routes';
import type { RoleId } from '../types/menu';

export const useRoutePermissions = () => {
  const { user } = useAuth();

  const hasAccess = useMemo(() => {
    if (!user?.roleId) return false;

    const roleId = user.roleId as RoleId;
    return (path: string) => {
      const allowedPaths = ROUTE_PERMISSIONS[roleId];
      return allowedPaths?.includes(path) ?? false;
    };
  }, [user?.roleId]);

  const getAllowedRoutes = useMemo(() => {
    if (!user?.roleId) return [];

    const roleId = user.roleId as RoleId;
    return ROUTE_PERMISSIONS[roleId] ?? [];
  }, [user?.roleId]);

  return {
    hasAccess,
    getAllowedRoutes,
  };
}; 