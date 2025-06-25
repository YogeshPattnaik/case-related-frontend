import axios from '../config/axios';

export interface SidebarMenuItem {
  label: string;
  path: string;
  icon: string;
  children: SidebarMenuItem[];
}

export interface SidebarResponse {
  success: boolean;
  menu: SidebarMenuItem[];
}

class SidebarService {
  private static instance: SidebarService;
  private baseURL = '/api/v1/users';

  private constructor() {}

  public static getInstance(): SidebarService {
    if (!SidebarService.instance) {
      SidebarService.instance = new SidebarService();
    }
    return SidebarService.instance;
  }

  async getSidebarMenu(): Promise<SidebarResponse> {
    const response = await axios.get<SidebarResponse>(`${this.baseURL}/sidebar`);
    return response.data;
  }
}

export const sidebarService = SidebarService.getInstance(); 