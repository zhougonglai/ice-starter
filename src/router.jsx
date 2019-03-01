/**
 * 定义应用路由
 */
import { Switch, Route } from 'react-router-dom';
import React from 'react';

import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';
import HomeLayout from './layouts/HomeLayout';

// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
const router = () => {
  return (
    <Switch>
      <Route path="/user" component={UserLayout} />
      <Route path="/home" component={HomeLayout} />
      <Route path="/" component={BasicLayout} />
    </Switch>
  );
};

export default router;
