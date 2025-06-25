import { LoginViewModel } from '@/viewmodels/auth/LoginViewModel';
import axios from '../config/axios';
import type { User, LoginResponse } from '../types/user';

class AuthService {
  private static instance: AuthService;
  private baseURL = '/api/v1/users';

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(credentials: LoginViewModel): Promise<LoginResponse> {
    const response = await axios.post<LoginResponse>(`${this.baseURL}/login`, credentials);
    return response.data;
  }

  async logout(): Promise<void> {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await axios.get<User>(`${this.baseURL}/me`);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = AuthService.getInstance(); 