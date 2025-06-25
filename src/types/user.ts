import type { RoleId } from './menu';

export interface Role {
  id: string;
  name: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  role: Role;
}

export interface LoginResponse {
  success: boolean;
  accessToken: string;
  user: User;
}

export interface UserState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
} 