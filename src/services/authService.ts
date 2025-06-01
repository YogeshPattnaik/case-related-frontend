import axios from '../config/axios';
import type { User, UserResponse } from '../types/user';
import type { LoginFormValues } from '../validations/auth/LoginValidation';
import type { RegisterFormValues } from '../validations/auth/RegisterValidation';

class AuthService {
  private static instance: AuthService;
  private baseURL = '/api/auth';

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async getCurrentUser(): Promise<UserResponse> {
    const response = await axios.get<UserResponse>(`${this.baseURL}/me`);
    return response.data;
  }

  public async login(email: string, password: string): Promise<UserResponse> {
    const response = await axios.post<UserResponse>('/auth/login', {
      email,
      password,
    });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response.data;
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public async register(data: RegisterFormValues): Promise<UserResponse> {
    const response = await axios.post<UserResponse>('/auth/register', data);
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response.data;
  }

  public async updateProfile(userData: Partial<User>): Promise<UserResponse> {
    const response = await axios.put<UserResponse>(`${this.baseURL}/profile`, userData);
    return response.data;
  }

  public async updatePreferences(preferences: User['preferences']): Promise<UserResponse> {
    const response = await axios.put<UserResponse>(`${this.baseURL}/preferences`, { preferences });
    return response.data;
  }

  public async forgotPassword(email: string): Promise<void> {
    await axios.post('/auth/forgot-password', { email });
  }

  public async resetPassword(password: string, token: string): Promise<void> {
    await axios.post('/auth/reset-password', {
      password,
      token,
    });
  }

  public async sendOtp(email: string): Promise<void> {
    await axios.post('/auth/send-otp', { email });
  }

  public async verifyOtp(email: string, otp: string): Promise<UserResponse> {
    const response = await axios.post<UserResponse>('/auth/verify-otp', { email, otp });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response.data;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = AuthService.getInstance(); 