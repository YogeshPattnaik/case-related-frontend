import { ROUTES } from '../routes';
import type { RoleId } from './menu';

export interface RouteConfig {
  path: string;
  name: string;
  icon?: string;
  children?: RouteConfig[];
}

export interface RouteResponse {
  routes: RouteConfig[];
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: RoleId[];
}

export const PUBLIC_ROUTES = {
  LOGIN: ROUTES.LOGIN,
  REGISTER: ROUTES.REGISTER,
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
} as const;

export const PROTECTED_ROUTES = {
  DASHBOARD: ROUTES.DASHBOARD,
  PROFILE: ROUTES.PROFILE,
  SETTINGS: ROUTES.SETTINGS,
  PROFILE_COMPLETION: '/profile-completion',
} as const;

export type PublicRoute = typeof PUBLIC_ROUTES[keyof typeof PUBLIC_ROUTES];
export type ProtectedRoute = typeof PROTECTED_ROUTES[keyof typeof PROTECTED_ROUTES];

export const ROUTE_PERMISSIONS = {
  ADMIN: [
    ROUTES.DASHBOARD,
    ROUTES.PROFILE,
    ROUTES.SETTINGS,
  ],
  MANAGER: [
    ROUTES.DASHBOARD,
    ROUTES.PROFILE,
    ROUTES.SETTINGS,
  ],
  USER: [
    ROUTES.DASHBOARD,
    ROUTES.PROFILE,
    ROUTES.SETTINGS,
  ],
} as const; 