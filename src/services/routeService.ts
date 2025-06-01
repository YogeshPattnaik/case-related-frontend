import axios from '../config/axios';
import type { RouteResponse } from '../types/routes';

class RouteService {
  private static instance: RouteService;
  private baseURL = '/api/routes';

  private constructor() {}

  public static getInstance(): RouteService {
    if (!RouteService.instance) {
      RouteService.instance = new RouteService();
    }
    return RouteService.instance;
  }

  public async getRoutes(): Promise<RouteResponse> {
    const response = await axios.get<RouteResponse>(`${this.baseURL}`);
    return response.data;
  }
}

export const routeService = RouteService.getInstance(); 