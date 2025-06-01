import axios from '../config/axios';
import type { MenuResponse, RoleId } from '../types/menu';

class MenuService {
  private static instance: MenuService;
  private readonly baseUrl = '/api/v1/menu';

  private constructor() {}

  public static getInstance(): MenuService {
    if (!MenuService.instance) {
      MenuService.instance = new MenuService();
    }
    return MenuService.instance;
  }

  async getMenuByRole(roleId: RoleId): Promise<MenuResponse> {
    try {
      const response = await axios.get<MenuResponse>(`${this.baseUrl}/${roleId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menu:', error);
      throw error;
    }
  }

  async refreshMenu(): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/refresh`);
    } catch (error) {
      console.error('Error refreshing menu:', error);
      throw error;
    }
  }
}

export const menuService = MenuService.getInstance(); 