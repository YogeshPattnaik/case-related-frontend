import { lazyLoad } from '../utils/lazyLoad';

const pathToComponent: Record<string, () => JSX.Element> = {
  '/super-admin/dashboard': lazyLoad(() => import('../pages/dashboard/Dashboard')),
  '/profile': lazyLoad(() => import('../pages/profile/Profile')),
  // Add more mappings as needed
};

export default pathToComponent; 