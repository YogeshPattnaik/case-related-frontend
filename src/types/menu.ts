export const ROLES = {
  CONSUMER: 1,
  ADVOCATE: 2,
  COMMISSION: 3,
  JUDGE: 4,
} as const;

export type RoleId = typeof ROLES[keyof typeof ROLES];

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
  order: number;
  isActive: boolean;
  permissions?: string[];
}

export interface MenuResponse {
  roleId: RoleId;
  menuItems: MenuItem[];
  lastUpdated: string;
}

export interface MenuState {
  items: MenuItem[];
  isLoading: boolean;
  error: Error | null;
  lastUpdated: string | null;
} 