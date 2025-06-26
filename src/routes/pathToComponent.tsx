import { lazyLoad } from '../utils/lazyLoad';

const pathToComponent: Record<string, () => JSX.Element> = {
  '/profile': lazyLoad(() => import('../pages/profile/Profile')),
  '/super-admin/dashboard': lazyLoad(() => import('../pages/dashboard/Dashboard')),
  '/masters/countries': lazyLoad(() => import('../pages/masters/country/CountryList'))
};

export default pathToComponent; 