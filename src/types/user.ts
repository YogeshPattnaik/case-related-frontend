import type { RoleId } from './menu';

export interface User {
  id: number;
  roleId: RoleId;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  profilePicture?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
  preferences?: {
    theme: 'light' | 'dark';
    language: string;
    notifications: boolean;
  };
  metadata?: {
    [key: string]: any;
  };
}

export interface UserResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface UserState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
} 