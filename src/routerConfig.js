// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';

import UserLogin from './pages/UserLogin';
import MemberManager from './pages/MemberManager';
import BasicLayout from './layouts/BasicLayout';
import UserRegister from './pages/UserRegister';

const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/member/manager',
    layout: BasicLayout,
    component: MemberManager,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };
