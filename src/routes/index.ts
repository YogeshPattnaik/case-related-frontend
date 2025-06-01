export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  PROFILE_COMPLETION: '/profile-completion',
  CASES: '/cases',
  CASE_DETAILS: '/cases/:id',
  TASKS: '/tasks',
  REPORTS: '/reports',
  USERS: '/users',
  NOT_FOUND: '/404',
} as const;

export type Route = keyof typeof ROUTES;
export type RouteValue = typeof ROUTES[Route]; 