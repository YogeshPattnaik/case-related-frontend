import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { RoleId } from '../types/menu';
import { menuService } from '../services/menuService';

export const useMenu = (roleId: RoleId) => {
  const queryClient = useQueryClient();

  const {
    data: menuData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['menu', roleId],
    queryFn: () => menuService.getMenuByRole(roleId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
  });

  const refreshMenu = async () => {
    await menuService.refreshMenu();
    await queryClient.invalidateQueries({ queryKey: ['menu', roleId] });
  };

  return {
    menuItems: menuData?.menuItems ?? [],
    isLoading,
    error,
    refetch,
    refreshMenu,
    lastUpdated: menuData?.lastUpdated,
  };
}; 