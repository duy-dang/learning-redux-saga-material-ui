import AdminHomePage from '../container/adminhomepage/index';
import Taskboard from '../container/Taskboard';

export const ADMIN_ROUTES = [
  {
    name: 'Trang quản trị',
    path: '/',
    exact: true,
    componentRouter: AdminHomePage,
  },
  {
    name: 'Quản lí công việc',
    path: '/task-board',
    exact: false,
    componentRouter: Taskboard,
  },
];
